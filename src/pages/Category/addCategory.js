import React, { useState } from "react";
import BasicButton from "../../components/BasicButton";
import { Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BasicModal from "../../components/BasicModal";
import { useDispatch } from "react-redux";
import { createCategory } from "./categorySlice";
import BasicTextField from "../../components/BasicTextField";

const AddCategory = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleCategory = () => {
    setModalOpen(!modalOpen);
  };

  const handleAddCategory = async () => {
    await dispatch(
      createCategory({
        name: category,
      })
    );
    setModalOpen(false);
  };

  return (
    <>
      <BasicButton
        icon={<AddIcon sx={{ color: "black" }} />}
        text={`Add Category`}
        onClick={handleCategory}
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
              Add Category
            </Typography>

            <BasicTextField
              label={"Category"}
              type={"text"}
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <BasicButton
              text={`Add Category`}
              onClick={handleAddCategory}
            ></BasicButton>
          </Grid>
        </BasicModal>
      )}
    </>
  );
};

export default AddCategory;
