import User from "@domain/user";
import { Wrapper } from './styled';
import Theme from '@theme';

const Home = () => {
  return (
    <>
    <Theme>
      <Wrapper>HOME PAGE COMPONEN!
        <User/>
      </Wrapper>
      </Theme>
    </>
  );
};

export default Home;
