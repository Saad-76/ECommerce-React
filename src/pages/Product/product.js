import React from "react";
import { Grid, Typography } from "@mui/material";

import ProductList from "./productList";
import Container from "../../shared-components/Container";
import AddProducts from "./addProducts";

const Product = () => {
  return (
    <>
      <Container>
        <Grid
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ marginTop: "2vh" }}
        >
          <Grid xs={6}>
            <Typography variant="h6">All Products</Typography>
          </Grid>
          <Grid xs={6}>
            <AddProducts />
          </Grid>
        </Grid>
        <ProductList />
      </Container>
    </>
  );
};

export default Product;
