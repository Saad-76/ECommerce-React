import React, { useState } from "react";
import BasicButton from "../../components/BasicButton";
import { Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BasicModal from "../../components/BasicModal";
import BasicSelect from "../../components/BasicSelect";

const AddCategory = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCategory = () => {
    setModalOpen(!modalOpen);
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

            <BasicSelect label="Category" />
          </Grid>
        </BasicModal>
      )}
    </>
  );
};

export default AddCategory;
