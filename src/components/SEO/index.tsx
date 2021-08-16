import Head from 'next/head';
import config from 'config';

type SEOProps = {
  description?: string;
  title?: string;
};

const SEO = ({ description, title }: SEOProps) => {
  const siteTitle = config.title;

  return (
    <Head>
      <title>{`${title ? `${title} - ` : ''}${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content="/assets/img/social.png" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title || siteTitle} />
      <meta property="twitter:image" content="/assets/img/social_twitter.png" />
      <meta property="twitter:description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

SEO.defaultProps = {
  description: '',
  title: '',
};

export default SEO;
