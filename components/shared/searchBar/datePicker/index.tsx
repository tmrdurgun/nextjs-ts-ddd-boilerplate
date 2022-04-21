import { useState, useEffect, FC } from "react";
import DatePickerUi, { ValueType } from "@uikit/datepicker";
import EmptyComp from "./emptyComp";
import SelectedComp from "./selectedComp";
type PropsType = {
  label: string;
  onChange: (value: ValueType) => void;
};
const DateSelection: FC<PropsType> = ({ label, onChange }) => {
  const [dateValue, setDateValue] = useState<ValueType>(null);
  useEffect(() => {
    onChange(dateValue);
  }, [dateValue]);
  return (
    <>
      <DatePickerUi onChange={(value) => setDateValue(value)}>
        {dateValue ? (
          <SelectedComp value={dateValue} label={label} />
        ) : (
          <EmptyComp label={label} />
        )}
      </DatePickerUi>
    </>
  );
};
export default DateSelection;
