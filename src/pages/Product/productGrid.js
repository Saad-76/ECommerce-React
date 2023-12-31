import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import BasicCard from "../../components/BasicCard";
import { useDispatch } from "react-redux";
import { GetProducts } from "./productSlice";
import EditProduct from "./editProduct";
import { ItemsAddedInCart } from "../Cart/cartSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const [productList, setProductList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const getProducts = async () => {
    const allProducts = await dispatch(GetProducts());
    setProductList(allProducts.payload.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const editProduct = (item) => {
    setSelected(item);
    setModalOpen(!modalOpen);
  };

  let productsArr = [];

  const handleCart = (item) => {
    productsArr = [...productsArr, item];
    dispatch(ItemsAddedInCart(productsArr));
  };

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        maxHeight: 850,
        overflowY: "scroll",
        overflowX: "hidden",
        marginTop: "2vh",
      }}
      xs={12}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      {productList?.map((item) => (
        <BasicCard
          name={item.name}
          description={item.description}
          img={item.image}
          moreMenuBtn={true}
          addToCartBtn={true}
          fvrtBtn={true}
          moreMenu={() => editProduct(item)}
          addToCart={() => handleCart(item)}
        />
      ))}

      {modalOpen && (
        <EditProduct
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          item={selected}
        />
      )}
    </Grid>
  );
}
