import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import BasicModal from "../../components/BasicModal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import BasicCard from "../../components/BasicCard";
import BasicButton from "../../components/BasicButton";

const Cart = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCart = () => {
    setModalOpen(!modalOpen);
  };

  const itemsInCart = useSelector((state) => state.cart.cartItems);

  const handleConfirmPayment = () => {
    console.log("order api here");
  };

  return (
    <>
      <Typography
        sx={{
          padding: "0px 1vh",
        }}
        onClick={handleCart}
      >
        <Typography
          sx={{
            fontSize: "12px",
            background: "red",
            borderRadius: "100px",
            textAlign: "center",
            height: "17px",
            width: "20px",
          }}
        >
          {itemsInCart?.length}
        </Typography>
        <ShoppingCartIcon sx={{ color: "white", fontSize: "3vh" }} />
      </Typography>

      {modalOpen && (
        <BasicModal
          closeModal={() => setModalOpen(false)}
          heading={`(${itemsInCart?.length}) Items added in Cart`}
        >
          <Grid
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
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
              {itemsInCart?.map((item) => (
                <BasicCard
                  name={item.name}
                  description={item.description}
                  img={item.image}
                />
              ))}

              {itemsInCart.length !== 0 ? (
                <BasicButton
                  text={"Confirm Payment"}
                  onClick={handleConfirmPayment}
                />
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </BasicModal>
      )}
    </>
  );
};

export default Cart;
