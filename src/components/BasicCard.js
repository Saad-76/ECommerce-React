import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import "./style.css";

const BasicCard = ({ img, name, description }) => {
  return (
    <Grid xs={12}>
      <Grid
        sx={{
          height: "300px",
          width: "15vw",
          backgroundColor: "white",
          borderRadius: "8px",
          margin: "12px",
        }}
      >
        <img src={img} alt={img} className="card-img" />
        <Box sx={{ padding: "8px 12px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography variant="subtitle" sx={{ fontSize: "12px" }}>
            {description}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default BasicCard;
