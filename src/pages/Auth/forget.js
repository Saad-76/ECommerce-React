import React from "react";
import AuthContainer from "../../components/AuthContainer";
import BasicTextField from "../../components/BasicTextField";
import BasicButton from "../../components/BasicButton";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Forget = () => {
  const handleForget = () => {};

  return (
    <AuthContainer
      title={"Forget Password"}
      description={"Enter Your Email to reset Password"}
    >
      <BasicTextField label={"Email"} type={"text"} />
      <BasicButton text={"Recover"} onClick={handleForget} />
      <Typography
        sx={{ marginTop: "3vh", fontSize: "12px" }}
        variant="subtitle2"
      >
        Remember Password <Link to="/">Login</Link>
      </Typography>
    </AuthContainer>
  );
};
export default Forget;
