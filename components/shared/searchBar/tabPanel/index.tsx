import { useState, SyntheticEvent } from "react";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import FlightIcon from "@mui/icons-material/Flight";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import Container from "@mui/material/Container";

import { TabStyled, TabPanelStyled, TabListStyled } from "./styled";
import FlightSearchBar from "@domain/flight/searchBar";
const TabPanelComp = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <TabContext value={value}>
        <TabListStyled onChange={handleChange}>
          <TabStyled
            label="Uçak"
            value="1"
            icon={<FlightIcon sx={{ transform: "rotate(45deg)" }} />}
            iconPosition="start"
          />
          <TabStyled
            label="Otel"
            value="2"
            icon={<RoomServiceIcon />}
            iconPosition="start"
          />
        </TabListStyled>
        <TabPanelStyled value="1">
          <FlightSearchBar />
        </TabPanelStyled>
        <TabPanelStyled value="2">Otel Content</TabPanelStyled>
      </TabContext>
    </Container>
  );
};
export default TabPanelComp;
