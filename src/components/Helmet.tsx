import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';
import { DefaultTheme, withTheme } from 'styled-components';
import { useHelmetQuery } from '../queries/useHelmetQuery';

type Props = {
  theme: DefaultTheme;
};

const Helmet = ({ theme }: Props) => {
  const { siteTitle, siteDescription, icon } = useHelmetQuery();
  const title = `${name} Portfolio`;


  return (
    <ReactHelmet htmlAttributes={{ lang: 'en' }}>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={siteDescription} />
      <link rel="shortcut icon" href={`https:${icon.favicon32.src}`} />
      <meta name="theme-color" content={theme.colors.background} />
      <meta name="image" content={`https:${icon.favicon32.src}`} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={siteDescription} />
      <meta itemProp="image" content={`https:${icon.favicon32.src}`} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={siteDescription} />
      <meta name="og:image" content={`https:${icon.bigIcon.src}`} />
      <meta name="og:site_name" content={title} />
      <meta name="og:locale" content="en_US" />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={`https:${icon.bigIcon.src}`} />
      <meta name="twitter:image:src" content={`https:${icon.bigIcon.src}`} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`https:${icon.appleIcon.src}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`https:${icon.favicon32.src}`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`https:${icon.favicon16.src}`}
      />
    </ReactHelmet>
  );
};
export default withTheme(Helmet);
