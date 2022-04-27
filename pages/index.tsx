import { getLayout } from "@layout/index";
import Home from "@page/home";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage = (props: any) => {
  return <Home {...props} />;
};

HomePage.getLayout = getLayout;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'header']),
  },
})

export default HomePage;
