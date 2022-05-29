import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'dev-portfolio',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: ['gatsby-plugin-styled-components', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sitemap'],
};

export default config;
