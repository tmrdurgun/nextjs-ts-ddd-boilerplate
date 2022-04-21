import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export interface IAppProps {
  Title: string;
  ImageUrl: string;
  Href: string;
}
const CampainCard = (props: IAppProps) => {
  return (
    <Card
      style={{ marginRight: 5, marginLeft: 5, marginTop: 15 }}
      sx={{
        maxWidth: 450,
        maxHeight: 425,
        height: 425,
        width: 400,
        border: "1px solid gray",
      }}
    >
      <CardMedia
        component="img"
        height="300"
        src={props.ImageUrl}
        alt={props.Title}
      />

      <CardContent>
        <Typography gutterBottom variant="h6" fontWeight="bold" component="div">
          {props.Title}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CampainCard;
