import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import { Box } from "@mui/system";
import theme from "../theme";
import { styled } from "@mui/material/styles";

const CustomTablePagination = styled(TablePagination)(({ theme }) => ({
  "& .MuiTablePagination-spacer": {
    display: "none",
  },
  "& .MuiTablePagination-toolbar:BasicEnhancedTable(3)": {
    background: "red !important",
  },
  "& .MuiInputBase-root": {
    marginRight: "auto",
  },
  "& .MuiTablePagination-select": {
    border: theme.palette.primary.dropDownBorder,
    borderRadius: theme.shapes.primaryBtnBorderRadius,
    color: "#979798",
  },
}));

export default function BasicTablePagination(props) {
  return (
    <>
      <Box
        sx={{
          background: `${theme.palette.primary.white}`,
          borderRadius: `${theme.table.borderRadius}`,
          // padding: "10px",
        }}
      >
        <CustomTablePagination
          rowsPerPageOptions={props.rowsPerPageOptions}
          component="div"
          count={props.count}
          page={props.page}
          onPageChange={props.onPageChange}
          rowsPerPage={props.rowsPerPage}
          labelRowsPerPage="Items per page"
          onRowsPerPageChange={
            props.onRowsPerPageChange ? props.onRowsPerPageChange : [5, 10, 15]
          }
        />
      </Box>
    </>
  );
}
