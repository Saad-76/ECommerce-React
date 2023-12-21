import React, { useState } from "react";
import Container from "../../shared-components/Container";
import BasicButton from "../../components/BasicButton";
import { Box, Grid, Typography } from "@mui/material";
import BasicTextField from "../../components/BasicTextField";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    category_id: "",
  });

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setProduct({ ...product, name: e.target.value });
    } else if (e.target.id === "description") {
      setProduct({ ...product, description: e.target.value });
    }
  };

  //   const handleImage = () => {};

  //   const handleCategory = () => {};

  return (
    <Container>
      <Grid
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Add Product
        </Typography>
        <BasicTextField
          label={"Name"}
          type={"text"}
          id="name"
          value={product.name}
          onChange={(e) => handleChange(e)}
        />
        <BasicTextField
          label={"Description"}
          type={"text"}
          id="description"
          value={product.description}
          onChange={(e) => handleChange(e)}
        />
        <Box sx={{ marginTop: "3vh" }}>
          <BasicButton text={`Add`} />
        </Box>
      </Grid>
    </Container>
  );
};

export default AddProduct;
