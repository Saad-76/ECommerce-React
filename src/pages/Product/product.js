import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Grid, Typography } from "@mui/material";

import ProductList from "./productList";
import BasicModal from "../../components/BasicModal";
import BasicButton from "../../components/BasicButton";
import Container from "../../shared-components/Container";

const Product = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleProduct = () => {
    setModalOpen(!modalOpen);
  };

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
            <BasicButton
              icon={<AddIcon sx={{ color: "black" }} />}
              text={`Add Product`}
              onClick={handleProduct}
            />
          </Grid>
        </Grid>
        <ProductList />
      </Container>
      {modalOpen && <BasicModal closeModal={() => setModalOpen(false)} />}{" "}
    </>
  );
};

export default Product;
