import React from 'react';
import { Helmet } from 'react-helmet';

function Seo() {
  const metaData = [
    {
      name: 'canonical',
      content: '',
    },
    {
      name: 'author',
      content: 'Lorenzo Faenzi',
    },
    {
      name: 'description',
      content: 'Welcome to my personal portfolio, I\'m Lorenzo Faenzi and i\'m a front-end developer.',
    },
    {
      name: 'image',
      content: '',
    },
    {
      name: 'og:url',
      content: '',
    },
    {
      name: 'og:type',
      content: 'article',
    },
    {
      name: 'og:title',
      content: 'Lorenzo Faenzi | Portfolio',
    },
    {
      name: 'og:description',
      content: 'Welcome to my personal portfolio, I\'m Lorenzo Faenzi and i\'m a front-end developer.',
    },
    {
      name: 'og:image',
      content: '',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:creator',
      content: 'Lorenzo Faenzi',
    },
    {
      name: 'twitter:title',
      content: 'Lorenzo Faenzi | Portfolio',
    },
    {
      name: 'twitter:description',
      content: 'Welcome to my personal portfolio, I\'m Lorenzo Faenzi and i\'m a front-end developer.',
    },
    {
      name: 'twitter:image',
      content: '',
    },
  ];

  const linkData = [
    {
      rel: 'shortcut icon',
      href: '',
    },
    {
      rel: 'apple-touch-icon',
      href: 'icons/apple-touch-icon.png',
    },
  ];
  return (
    <Helmet
      htmlAttributes={{ lang: 'it' }}
      title="Lorenzo Faenzi | Portfolio"
      titleTemplate="Lorenzo Faenzi | Portfolio"
      meta={metaData}
      link={linkData}
    />
  );
}

export default Seo;
