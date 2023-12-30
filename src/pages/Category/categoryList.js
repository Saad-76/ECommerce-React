import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetCategories } from "./categorySlice";
import BasicEnhancedTable from "../../components/BasicEnhancedTable";

const headerCells = [
  {
    id: "_id",
    numeric: false,
    disablePadding: false,
    label: "Sr",
    type: "text",
    avatar: false,
    align: "left",
    minWidth: "10px",
  },
  {
    id: "category",
    numeric: false,
    disablePadding: false,
    label: "Category",
    type: "text",
    avatar: true,
    align: "left",
    minWidth: "80px",
  },
];

const CategoryList = () => {
  const dispatch = useDispatch();
  const [tableRows, setTableRows] = useState([]);

  const allCategories = async () => {
    await dispatch(GetCategories());
  };

  useEffect(() => {
    allCategories();
  }, []);

  return (
    <Grid>
      <BasicEnhancedTable
        rowsPage={tableRows.length}
        minHeight="30vh"
        loading={false}
        cursor="pointer"
        hideSearch
        hidePagination
        hideToolbarButton
        rows={tableRows}
        headerCells={headerCells}
        isSetting={true}
      />
    </Grid>
  );
};
export default CategoryList;
