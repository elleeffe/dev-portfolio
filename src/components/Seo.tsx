import React from 'react';
import { Helmet } from 'react-helmet';
import favicon from '../assets/images/favicon.ico';
import logo from '../assets/images/logo.png';

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
      content: 'Benvenuti, Mi chiamo Lorenzo Faenzi e sono un front-end developer. Mi occupo di sviluppo siti web e applicazioni.',
    },
    {
      name: 'image',
      content: logo,
    },
    {
      name: 'og:url',
      content: 'https://lorenzofaenzi.it',
    },
    {
      name: 'og:type',
      content: 'website',
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
      content: logo,
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
      content: logo,
    },
  ];

  const linkData = [
    {
      rel: 'shortcut icon',
      href: favicon,
    },
    {
      rel: 'apple-touch-icon',
      href: logo,
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
