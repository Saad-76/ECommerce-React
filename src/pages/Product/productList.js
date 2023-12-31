import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BasicEnhancedTable from "../../components/BasicEnhancedTable";
import SettingsIcon from "@mui/icons-material/Settings";
import { GetProducts } from "./productSlice";

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
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
    type: "text",
    avatar: true,
    align: "left",
    minWidth: "80px",
  },
  {
    id: "description",
    numeric: false,
    disablePadding: false,
    label: "Description",
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

const ProductList = () => {
  const dispatch = useDispatch();
  const [tableRows, setTableRows] = useState([]);

  const allProducts = async () => {
    const allProducts = await dispatch(GetProducts());
    const arr = allProducts.payload.data.data?.map((item) => {
      const data = {
        id: item._id,
        name: item.name,
        description: item.description,
        actions: <SettingsIcon sx={{ color: "black" }} />,
      };
      return data;
    });
    setTableRows(arr);
  };

  useEffect(() => {
    allProducts();
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
export default ProductList;
