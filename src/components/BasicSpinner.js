import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const BasicSpinner = ({ open }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        // background:
        //   "linear-gradient(121.45deg, #769f5f -0.34%, #769f5f  99.24%)",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9999999,
        pointerEvents: "none",
        display: open ? "block" : "none",
      }}
    >
      <CircularProgress
        sx={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </Box>
  );
};

export default BasicSpinner;
