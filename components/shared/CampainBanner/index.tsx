import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { BannerLabel, IconLabel } from "./styled";
import CampaignIcon from "@mui/icons-material/Campaign";
export interface IAppProps {
  Title: string;
  // Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  Icon: string;
}
const styles = {
  paperContainer: {
    display: "flex",
    color: "#4b4b4b",
    height: "120px",

    backgroundImage: `url(${"/images/campainBanner.png"})`,
  },
};
const CampainBanner = (props: IAppProps) => {
  return (
    <>
      <Grid spacing={2} xs={12} md={12} style={styles.paperContainer}>
        <Grid mt={5} mr={2}>
          <IconLabel>
            {props.Icon}
            <CampaignIcon color="disabled" fontSize="large"></CampaignIcon>
          </IconLabel>
        </Grid>
        <Grid mt={5}>
          <BannerLabel>{props.Title}</BannerLabel>
        </Grid>
      </Grid>
    </>
  );
};

export default CampainBanner;
