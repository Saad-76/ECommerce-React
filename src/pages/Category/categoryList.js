import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetCategories } from "./categorySlice";
import BasicEnhancedTable from "../../components/BasicEnhancedTable";
import SettingsIcon from "@mui/icons-material/Settings";
const headerCells = [
  {
    id: "id",
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
  {
    id: "actions",
    numeric: false,
    disablePadding: false,
    label: "Actions",
    type: "text",
    avatar: true,
    align: "left",
    minWidth: "80px",
  },
];

const CategoryList = () => {
  const dispatch = useDispatch();
  const [tableRows, setTableRows] = useState([]);

  const handleEditCategory = (item) => {
    console.log(item, "item is her");
  };

  const allCategories = async () => {
    const response = await dispatch(GetCategories());
    const arr = response?.payload?.data?.categories?.map((item) => {
      const data = {
        id: item._id,
        name: item.name,
        actions: (
          <SettingsIcon
            sx={{ color: "black" }}
            onClick={() => handleEditCategory(item)}
          />
        ),
      };
      return data;
    });
    setTableRows(arr);
  };

  useEffect(() => {
    allCategories();
  }, []);

  return (
    <Grid sx={{ paddingTop: "4vh" }}>
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
