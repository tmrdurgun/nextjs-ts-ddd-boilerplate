import { getLayout } from "@layout/index";
import Home from "@page/home";
const HomePage = (props: any) => {
  return <Home {...props} />;
};

HomePage.getLayout = getLayout;

export default HomePage;
