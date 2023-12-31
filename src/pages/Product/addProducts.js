import React, { useEffect, useState } from "react";
import BasicButton from "../../components/BasicButton";
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
import AddIcon from "@mui/icons-material/Add";
import BasicModal from "../../components/BasicModal";
import { GetCategories } from "./productSlice";
import { useDispatch } from "react-redux";

const AddProducts = () => {
  const dispatch = useDispatch();

  const [category, setCategory] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    category_id: "",
  });

  const handleProduct = () => {
    setModalOpen(!modalOpen);
  };

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setProduct({ ...product, name: e.target.value });
    } else if (e.target.id === "description") {
      setProduct({ ...product, description: e.target.value });
    }
  };

  //   const handleImage = () => {};

  const handleCategoryChange = (e) => {
    console.log(e, "trget");
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
      <BasicButton
        icon={<AddIcon sx={{ color: "black" }} />}
        text={`Add Product`}
        onClick={handleProduct}
      />
      {modalOpen && (
        <BasicModal
          closeModal={() => setModalOpen(false)}
          heading={"Add Product"}
          modalWidth={"30%"}
        >
          <Grid
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
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
                  {"Category"}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  // value={category}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  label={"Category"}
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

export default AddProducts;
