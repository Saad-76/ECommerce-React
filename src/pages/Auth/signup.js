import React, { useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import AuthContainer from "../../shared-components/AuthContainer";
import BasicTextField from "../../components/BasicTextField";
import BasicButton from "../../components/BasicButton";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SignUpRequest } from "./authSlice";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState("true");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: "",
  });

  const handleChange = (event) => {
    setIsAdmin(event.target.value);
    setUser({ ...user, isAdmin: Boolean(event.target.value) });
  };

  const handleFormValue = (e) => {
    if (e.target.id === "name") {
      setUser({ ...user, name: e.target.value });
    } else if (e.target.id === "email") {
      setUser({ ...user, email: e.target.value });
    } else if (e.target.id === "password") {
      setUser({ ...user, password: e.target.value });
    }
  };

  const handleSignup = async () => {
    const response = await dispatch(SignUpRequest(user));
    const resp = response.payload.data;
    if (resp.status === 200) {
      setUser({
        name: "",
        email: "",
        password: "",
        isAdmin: "",
      });
      setIsAdmin("");
      navigate("/login");
    }
  };

  return (
    <AuthContainer
      title={"Create new Account"}
      description={"Fill the fields to Create new Account"}
    >
      <BasicTextField
        id="name"
        label={"Name"}
        type={"text"}
        value={user.name}
        onChange={(e) => handleFormValue(e)}
      />
      <BasicTextField
        id="email"
        label={"Email"}
        type={"text"}
        value={user.email}
        onChange={(e) => handleFormValue(e)}
      />
      <BasicTextField
        id="password"
        label={"Password"}
        type={"password"}
        value={user.password}
        onChange={(e) => handleFormValue(e)}
      />
      <Typography
        sx={{ textAlign: "left", paddingTop: "12px", fontWeight: "bold" }}
      >
        Is Admin
      </Typography>

      <RadioGroup
        id="isAdmin"
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={isAdmin}
        onChange={handleChange}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FormControlLabel value="true" control={<Radio />} label="Yes" />
        <FormControlLabel value="false" control={<Radio />} label="No" />
      </RadioGroup>

      <Box style={{ marginTop: "3vh" }}>
        <BasicButton text={"Create"} onClick={handleSignup} />{" "}
      </Box>

      <Typography
        sx={{ marginTop: "3vh", fontSize: "12px" }}
        variant="subtitle2"
      >
        Already Have Account <Link to="/">Login</Link>
      </Typography>
    </AuthContainer>
  );
};
export default Signup;
