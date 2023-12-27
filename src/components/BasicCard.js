import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./style.css";
import BasicButton from "./BasicButton";

const BasicCard = ({
  img,
  name,
  description,
  onClick,
  moreMenu,
  addToCart,
  addToCartBtn,
  moreMenuBtn,
  fvrtBtn,
}) => {
  return (
    <Grid xs={12}>
      <Grid
        onClick={onClick}
        sx={{
          height: "300px",
          width: "15vw",
          backgroundColor: "white",
          borderRadius: "8px",
          margin: "12px",
          cursor: "pointer",
        }}
      >
        <img src={img} alt={img} className="card-img" />
        <Box sx={{ padding: "8px 16px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography variant="subtitle" sx={{ fontSize: "12px" }}>
            {description}
          </Typography>

          <Grid
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 0px 0px 0px",
            }}
          >
            <Grid xs={2}>{fvrtBtn ? <FavoriteBorderIcon /> : ""}</Grid>
            <Grid xs={8}>
              {addToCartBtn ? (
                <BasicButton
                  sx={{ width: "100%a" }}
                  text={"Add to Cart"}
                  onClick={addToCart}
                />
              ) : (
                ""
              )}
            </Grid>
            <Grid xs={2}>
              {moreMenuBtn ? <MoreVertIcon onClick={moreMenu} /> : ""}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
export default BasicCard;
