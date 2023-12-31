import React, { useState } from "react";
import BasicButton from "../../components/BasicButton";
import { Box, Grid, Typography } from "@mui/material";
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
        <BasicModal
          closeModal={() => setModalOpen(false)}
          heading={"Add Category"}
          modalWidth={"30%"}
        >
          <BasicTextField
            label={"Category"}
            type={"text"}
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Box sx={{ paddingTop: "2vh" }}>
            <BasicButton text={`Add Category`} onClick={handleAddCategory} />
          </Box>
        </BasicModal>
      )}
    </>
  );
};

export default AddCategory;
