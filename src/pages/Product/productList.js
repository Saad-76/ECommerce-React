import * as React from "react";
import { Grid } from "@mui/material";
import BasicCard from "../../components/BasicCard";

export default function ProductList() {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        maxHeight: 850,
        overflowY: "scroll",
        overflowX: "hidden",
        marginTop: "2vh",
      }}
      xs={12}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      {itemData.map((item) => (
        <BasicCard name={item.title} description={item.author} img={item.img} />
      ))}
    </Grid>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@detailed description of this imagfe shown in card is here",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
];
