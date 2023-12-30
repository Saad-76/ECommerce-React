import React from "react";
import { Grid, Typography } from "@mui/material";

import AddCategory from "./addCategory";
import CategoryList from "./categoryList";
import Container from "../../shared-components/Container";

const Category = () => {
  return (
    <Container>
      <Grid
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ marginTop: "2vh" }}
      >
        <Grid xs={6}>
          <Typography variant="h6">All Categories</Typography>
        </Grid>
        <Grid xs={6}>
          <AddCategory />
        </Grid>
      </Grid>
      <CategoryList />
    </Container>
  );
};
export default Category;
