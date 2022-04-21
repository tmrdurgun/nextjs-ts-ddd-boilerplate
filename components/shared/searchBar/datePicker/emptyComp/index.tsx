import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { FC } from "react";
import { Styledlabel, Box, Wrapper } from "./styled";

type PropsType = {
  label: string;
};

const emptyComp: FC<PropsType> = ({ label }) => {
  return (
    <Wrapper>
      <Styledlabel>{label}</Styledlabel>
      <Box>
        <CalendarTodayIcon color="action" />
      </Box>
    </Wrapper>
  );
};
export default emptyComp;
