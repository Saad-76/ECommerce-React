import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";

const pieParams = { height: 200, margin: { right: 5 } };

export default function BasicPie() {
  return (
    <Box flexGrow={1}>
      <Typography>BasicPie</Typography>
      <PieChart
        series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
        {...pieParams}
      />
    </Box>
  );
}
