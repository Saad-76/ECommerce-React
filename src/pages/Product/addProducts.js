import React, { useState } from "react";
import BasicButton from "../../components/BasicButton";
import { Grid, Typography } from "@mui/material";
import BasicTextField from "../../components/BasicTextField";
import AddIcon from "@mui/icons-material/Add";
import BasicModal from "../../components/BasicModal";
import BasicSelect from "../../components/BasicSelect";

const AddProducts = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleProduct = () => {
    setModalOpen(!modalOpen);
  };

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
    <>
      <BasicButton
        icon={<AddIcon sx={{ color: "black" }} />}
        text={`Add Product`}
        onClick={handleProduct}
      />
      {modalOpen && (
        <BasicModal closeModal={() => setModalOpen(false)}>
          <Grid
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
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
            <BasicSelect label="Category" />
          </Grid>
        </BasicModal>
      )}
    </>
  );
};

export default AddProducts;
