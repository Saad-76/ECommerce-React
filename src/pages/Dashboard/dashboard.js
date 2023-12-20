import React from "react";
import Stack from "@mui/material/Stack";

import BasicBars from "./BasicBars";
import BasicPie from "./BasicPie";
import Container from "../../shared-components/Container";

const Dashboard = () => {
  return (
    <Container>
      <Stack direction="row" width="100%" textAlign="center">
        <BasicBars />
        <BasicPie />
      </Stack>
    </Container>
  );
};

export default Dashboard;
