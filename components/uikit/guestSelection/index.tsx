import { FC } from "react";
import UiCounter, { CounterPropsTypes } from "@uikit/counter";
import { Wrapper, DescContent, Title, Label, CounterContent } from "./styled";
type PropsTypes = {
  title: string;
  label: string;
} & CounterPropsTypes;
const GuestSelection: FC<PropsTypes> = ({
  title,
  label,
  max,
  min,
  defaultValue,
  onChange,
}) => {
  return (
    <Wrapper>
      <DescContent>
        <Title>{title}</Title>
        <Label>{label}</Label>
      </DescContent>
      <CounterContent>
        <UiCounter
          min={min}
          max={max}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </CounterContent>
    </Wrapper>
  );
};
export default GuestSelection;
