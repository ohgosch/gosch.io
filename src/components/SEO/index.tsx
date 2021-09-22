import { useTranslation } from 'next-i18next';
import Head from 'next/head';

type SEOProps = {
  description?: string;
  title?: string;
};

const SEO = ({ description, title }: SEOProps) => {
  const { t } = useTranslation();
  const siteTitle = t('settings.name');
  const siteDescription = t('settings.description');
  const siteSlogan = t('settings.slogan');

  return (
    <Head>
      <title>
        {title ? `${title} - ${siteTitle}` : `${siteTitle} – ${siteSlogan}`}
      </title>
      <meta name="description" content={description || siteDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || siteTitle} />
      <meta
        property="og:description"
        content={description || siteDescription}
      />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content="/assets/img/social.png" />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={t('settings.social.twitter')} />
      <meta property="twitter:title" content={title || siteTitle} />
      <meta property="twitter:image" content="/assets/img/social_twitter.png" />
      <meta
        property="twitter:description"
        content={description || siteDescription}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

SEO.defaultProps = {
  description: '',
  title: '',
};

export default SEO;
