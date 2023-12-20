import React from "react";
import AuthContainer from "../../shared-components/AuthContainer";
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
      <div style={{ marginTop: "3vh" }}>
        <BasicButton text={"Recover"} onClick={handleForget} />{" "}
      </div>

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
