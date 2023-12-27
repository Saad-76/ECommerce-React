import { Grid, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useNavigate } from "react-router";
import Cart from "../pages/Cart/cart";

const Navbar = () => {
  const navigate = useNavigate();

  const handleRoute = (path) => {
    navigate(`/${path}`);
  };

  return (
    <Grid
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2vh 3vh",
        background: "#263b77eb",
        color: "white",
      }}
    >
      <Grid xs={6}>Navbar</Grid>
      <Grid xs={6}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Cart />
          <Typography
            sx={{
              padding: "0px 1vh",
            }}
            onClick={() => handleRoute("setting")}
          >
            <SettingsIcon sx={{ color: "white", fontSize: "3vh" }} />
          </Typography>
          <Typography onClick={() => handleRoute("setting")}>
            <AccountCircleIcon sx={{ color: "white", fontSize: "3vh" }} />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Navbar;
