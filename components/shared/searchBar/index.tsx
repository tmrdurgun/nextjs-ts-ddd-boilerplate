import { FC } from "react";
import { Wrapper, Title } from "./styled";
import TabPanel from "./tabPanel";
type PropsType = {
  fullContent?: boolean;
};
const SearchBar: FC<PropsType> = ({ fullContent }) => {
  return (
    <Wrapper>
      {fullContent && <Title>Rotanız belliyse, gerisi çok kolay!</Title>}
      <TabPanel />
    </Wrapper>
  );
};
export default SearchBar;
