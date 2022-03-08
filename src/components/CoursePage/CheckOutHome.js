import { Box, Container } from "@mui/material";
import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import BillingDetails from "./BillingDetails";
import OrderItem from "./OrderItem";
import Payment from "./Payment";

function CheckOutHome() {
  return (
    <>
      <Header color={"#282828"}></Header>
      <Box sx={{ background: "#EDF5FF", pt: 20 }}>
        <Container maxWidth="xl">
          <BillingDetails />
          <OrderItem />
          <Payment />
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default CheckOutHome;
