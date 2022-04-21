import { FC } from "react";
import { format } from "date-fns";
import { Wrapper, Styledlabel, MainLabel, SubLabel } from "./styled";
type PropTypes = {
  value: Date;
  label: string;
};
const SelectedComp: FC<PropTypes> = ({ label, value }) => {
  const selectedDay = format(value, "dd");
  const selectedMonth = format(value, "MMM");
  const selectedYear = format(value, "yy");
  return (
    <Wrapper>
      <MainLabel>{label}</MainLabel>
      <Styledlabel>{selectedDay}</Styledlabel>
      <SubLabel>
        {selectedMonth} {selectedYear}
      </SubLabel>
    </Wrapper>
  );
};
export default SelectedComp;
