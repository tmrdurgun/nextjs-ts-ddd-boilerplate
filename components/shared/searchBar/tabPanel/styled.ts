import styled from "styled-components";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";

const tabBgColor = "#434343";
const tabActiveBgColor = `rgba(67, 67, 67, 0.8)`;

export const TabListStyled = styled(TabList)`
  .MuiTabs-indicator {
    display: none !important;
  }
`;
export const TabStyled = styled(Tab)`
  color: ${tabBgColor};
  background-color: #ebebeb;
  transition: all 0.15s ease;
  padding: 14px 12px;
  font-size: 17px;
  font-weight: 600;
  white-space: nowrap;
  min-height: auto;
  line-height: 1;
  text-transform: none;
  & > svg {
    fill: #cb8800;
  }
  &:hover {
    background-color: ${tabBgColor};
    border-color: ${tabBgColor};
    color: #ffffff;
  }
  &.Mui-selected {
    background-color: ${tabActiveBgColor};
    border-color: ${tabActiveBgColor};
    color: #fff;
    & > svg {
      fill: #ffffff;
    }
  }
`;

export const TabPanelStyled = styled(TabPanel)`
  background-color: ${tabActiveBgColor};
  padding: 20px 25px;
  color: #ffffff;
  min-height: 120px;
`;
