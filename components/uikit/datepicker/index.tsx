import { useState, FC } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@date-io/date-fns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
export type ValueType = Date | null;

type PropsType = {
  onChange: (value: ValueType) => void;
};
const DatePicker: FC<PropsType> = (props) => {
  const [value, setValue] = useState<ValueType>(null);
  const [open, setOpen] = useState(false);
  const handleChange = (newValue: ValueType) => {
    setValue(newValue);
    setOpen(false);
    props.onChange(newValue);
  };
  const DateInput = () => <>{props.children}</>;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MobileDatePicker
        open={open}
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          handleChange(newValue);
        }}
        renderInput={(params) => (
          <div onClick={() => setOpen(true)}>
            <DateInput />
          </div>
        )}
      />
    </LocalizationProvider>
  );
};
export default DatePicker;
