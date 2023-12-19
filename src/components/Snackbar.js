import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BasicSnackbar = ({ openToast, handleToastClose, severity, msg }) => {
  return (
    <Snackbar
      open={openToast}
      autoHideDuration={6000}
      onClose={handleToastClose}
      sx={{
        bottom: "auto !important",
        left: "auto !important",
        right: "24px !important",
        top: "24px",
      }}
    >
      <Alert severity={severity} sx={{ width: "100%" }}>
        {msg}
      </Alert>
    </Snackbar>
  );
};
export default BasicSnackbar;
