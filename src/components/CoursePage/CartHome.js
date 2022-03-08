import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import Header from "../Shared/Header/Header";
import Cart from "./Cart";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import Footer from "../Shared/Footer/Footer";

function CartHome() {
  const [finalTotal, setFinalTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
    setIsClick(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <div>
      <Header
        color={"black"}
        handleOpen={handleOpen}
        handleOpen2={handleOpen2}
      />
      <Login
        open={open}
        handleClose={handleClose}
        handleOpen2={handleOpen2}
      ></Login>
      <Register
        open2={open2}
        handleClose2={handleClose2}
        handleOpen={handleOpen}
        isClick={isClick}
      ></Register>
      <Box sx={{ background: "#EDF5FF", pt: 20, height: "80vh" }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <ShoppingCart
                finalTotal={finalTotal}
                setFinalTotal={setFinalTotal}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Cart finalTotal={finalTotal} setTotalPrice />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}

export default CartHome;
