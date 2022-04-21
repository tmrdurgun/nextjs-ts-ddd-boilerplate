import type { ReactElement, FC } from "react";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
export default Layout;
