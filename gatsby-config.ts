import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Lorenzo Faenzui - Portfolio',
    siteUrl: 'https://lorenzofaenzi.it',
  },
  plugins: ['gatsby-plugin-styled-components', 'gatsby-plugin-react-helmet', {
    resolve: 'gatsby-plugin-sitemap',
    options: {
      query: `
      {
        allSitePage {
          edges {
            node {
              path
            }
          }
        }
      }
    `,
      excludes: ['/dev-404-page/', '/404/', '/404.html'],
      resolveSiteUrl: () => 'https://lorenzofaenzi.it',
      resolvePages: ({
        allSitePage: { edges: allPages },
      }: {
        allSitePage: { edges: { node: { path: string } }[] },
      }) => allPages.map((page) => ({ ...page.node })),
      serialize: ({ path }: {path: string}) => ({
        url: path,
      }),
    },
  }],
};

export default config;
