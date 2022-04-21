import { FC, useEffect, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Wrapper, IconButton, Value } from "./styled";
export type CounterPropsTypes = {
  min?: number;
  max?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
};
const Counter: FC<CounterPropsTypes> = ({
  min = 0,
  max = 99,
  defaultValue = min,
  onChange = () => {},
}) => {
  const [value, setValue] = useState(defaultValue);
  const handleClick = (s: number) => {
    let newValue: number = value + s;
    if (newValue > max) newValue = max;
    if (min > newValue) newValue = min;
    setValue(newValue);
  };
  useEffect(() => {
    onChange(value);
  }, [value]);
  return (
    <Wrapper>
      <IconButton onClick={() => handleClick(-1)}>
        <RemoveIcon fontSize="small" />
      </IconButton>
      <Value>{value}</Value>
      <IconButton onClick={() => handleClick(1)}>
        <AddIcon fontSize="small" />
      </IconButton>
    </Wrapper>
  );
};
export default Counter;
