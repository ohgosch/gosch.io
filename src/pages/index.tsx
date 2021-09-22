import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import MainTemplate from 'templates/Main';
import SEO from 'components/SEO';

const Page = () => {
  return (
    <>
      <SEO />
      <MainTemplate />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default Page;
