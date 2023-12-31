import React from "react";
import { createPortal } from "react-dom";
import ClearIcon from "@mui/icons-material/Clear";
import "../App.css";
import BasicButton from "./BasicButton";
import { Box, Grid } from "@mui/material";

const Modal = ({ heading, closeModal, children, modalWidth }) => {
  return createPortal(
    <div className="overlay">
      <div className="modal">
        <div
          className="inner-modal"
          style={{
            width: modalWidth ? modalWidth : "50%",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0px 12px",
            }}
            xs={12}
          >
            <Grid item xs={6}>
              <h5>{heading}</h5>
            </Grid>
            <Grid item xs={6}>
              <ClearIcon
                onClick={closeModal}
                sx={{
                  color: "red",
                  cursor: "pointer",
                  zIndex: "100",
                }}
              />
            </Grid>
          </Grid>

          {children}
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
