import styled from "styled-components";
export const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.theme.colors.lightBlue || "black"};
`;

export const Wrapper = styled.div`
  padding: 4em;
  background: smokewhite;
  color: ${(props) => props.theme.colors.persianGreen || "black"};
`;
