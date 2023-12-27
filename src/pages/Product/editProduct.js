import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import BasicTextField from "../../components/BasicTextField";
import BasicModal from "../../components/BasicModal";
import { GetCategories } from "./productSlice";
import { useDispatch } from "react-redux";

const EditProduct = ({ modalOpen, setModalOpen, item }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: item.name,
    description: item.description,
    image: "",
    category_id: "",
  });

  const [category, setCategory] = useState([]);

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setProduct({ ...product, name: e.target.value });
    } else if (e.target.id === "description") {
      setProduct({ ...product, description: e.target.value });
    }
  };

  const getCategories = async () => {
    const cat = await dispatch(GetCategories());
    setCategory(cat.payload.data.categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
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
              Edit Product
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

            <Box>
              <FormControl variant="standard" sx={{ width: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  {"label"}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  // value={category}
                  // onChange={handleChange}
                  label={"label"}
                >
                  {category &&
                    category.map((item) => {
                      return <MenuItem value={item.id}>{item.name}</MenuItem>;
                    })}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </BasicModal>
      )}
    </>
  );
};

export default EditProduct;
