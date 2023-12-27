import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContainer from "../../shared-components/AuthContainer";
import BasicTextField from "../../components/BasicTextField";
import BasicButton from "../../components/BasicButton";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginRequest } from "./authSlice";
import BasicSnackbar from "../../components/Snackbar";
import { saveToPersistance } from "../../utils/utils";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openToast, setOpenToast] = useState(false);
  const [severity, setSeverity] = useState("");
  const [msg, setMsg] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setUser({ ...user, email: e.target.value });
    } else if (e.target.id === "password") {
      setUser({ ...user, password: e.target.value });
    }
  };

  const handleLogin = async () => {
    const response = await dispatch(LoginRequest(user));
    const resp = response.payload.data;
    if (resp.status === 200) {
      setOpenToast(true);
      setSeverity("success");
      setMsg("Login Successfully");
      setUser({
        email: "",
        password: "",
      });

      saveToPersistance("auth_token", resp.user);
      navigate("/dashboard");
    }
  };

  const handleToastClose = (event, reason) => {
    setOpenToast(false);
  };

  return (
    <>
      <BasicSnackbar
        openToast={openToast}
        handleToastClose={handleToastClose}
        severity={severity}
        msg={msg}
      />
      <AuthContainer
        title={"Login User"}
        description={"Enter Your Credentials to Login"}
      >
        <BasicTextField
          label={"Email"}
          type={"text"}
          id="email"
          value={user.email}
          onChange={(e) => handleChange(e)}
        />
        <BasicTextField
          label={"Password"}
          type={"password"}
          id="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
        <Box style={{ marginTop: "3vh" }}>
          <BasicButton text={"Login"} onClick={handleLogin} />
        </Box>
        <Typography
          sx={{ marginTop: "3vh", fontSize: "12px" }}
          variant="subtitle2"
        >
          Create New Account <Link to="/signup">Create</Link>
        </Typography>
        <Typography
          sx={{ marginTop: "0.5vh", fontSize: "12px" }}
          variant="subtitle2"
        >
          Forget Password <Link to="/forget">Forget</Link>
        </Typography>
      </AuthContainer>
    </>
  );
};
export default Login;
