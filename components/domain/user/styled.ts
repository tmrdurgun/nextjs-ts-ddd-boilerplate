import styled from "styled-components";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)`
  background-color: #fff;
  border-right: 1px solid #232a2e;
  box-shadow: inset 0 0 0 0 transparent;
  cursor: pointer;
  float: left;
  height: 80px;
  padding: 23px 8px 0 15px;
  position: relative;
  transition: background-color 0.65s ease, box-shadow 0.45s ease-out;
  width: 280px;
  fieldset {
    border: none;
    outline: none;
  }
`;
