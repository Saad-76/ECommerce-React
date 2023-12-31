import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import ViewListIcon from "@mui/icons-material/ViewList";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

import ProductGrid from "./productGrid";
import Container from "../../shared-components/Container";
import AddProducts from "./addProducts";
import ProductList from "./productList";

const Product = () => {
  const [view, setView] = useState("Grid");

  const handleView = (display) => {
    setView(display);
  };

  return (
      <Container>
        <Grid
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Grid xs={6}>
            <Typography variant="h6">All Products</Typography>
          </Grid>
          <Grid xs={6}>
            <AddProducts />
          </Grid>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "12px 0px 0px 0px",
          }}
        >
          <ViewListIcon
            sx={{ fontSize: "35px", cursor: "pointer" }}
            onClick={() => handleView("Grid")}
          />
          <FormatListBulletedIcon
            sx={{ fontSize: "35px", cursor: "pointer" }}
            onClick={() => handleView("List")}
          />
        </Grid>

        {view === "Grid" ? <ProductGrid /> : <ProductList />}
      </Container>
  );
};

export default Product;
