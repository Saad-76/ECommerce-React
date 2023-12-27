import React from "react";
import { Grid, Typography } from "@mui/material";

import Container from "../../shared-components/Container";

const Setting = () => {
  return (
    <Container>
      <Grid
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ marginTop: "2vh" }}
      >
        <Grid xs={6}>
          <Typography variant="h6">Settings</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Setting;
