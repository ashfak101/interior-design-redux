import { Box, Button, TextField, Typography } from "@mui/material";
import React, {  useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addDiscount, addVat, setSubTotal } from "../../redux/actions/cartActions";

function Cart({ finalTotal }) {
  // const [state, dispatch] = useContext(DataContext);
  const  disCountPrice = useSelector((state) => state.allCart.disCountPrice)
  const dispatch =useDispatch()
  const [text, setText] = useState("");
  const [disCount, setDiscount] = useState(false);
  const vat = finalTotal * 0.15;
  let total = finalTotal + vat;
    const allCart = useSelector((state) => state.allCart);
  const handleDiscount = () => {
    if (text === "apex") {
      let discoutTotal = total / 2;
      setDiscount(true);
      dispatch(
        addDiscount(discoutTotal)
        );
    }
  };
  const handleDisDelete = () => {
    setDiscount(false);
    dispatch(
      addDiscount(total));
  };
  // console.log(state.disCountPrice);
  //   setTotalPrice(total);
  //   console.log(totalPrice);
  useEffect(() => {
    dispatch(
       addDiscount(total));
    dispatch(addVat(vat));
  }, [total, dispatch, vat]);
  // console.log(text);
  useEffect(() => {
    if(allCart.cart.length===0){
       dispatch(setSubTotal(0));
       dispatch(addVat(0))
       dispatch(addDiscount(0))
    }
  } , [allCart.cart, dispatch])
  return (
    <Box
      sx={{
        p: 2,
        background: "#0D2A62",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#ffffff", fontWeight: "bold", mb: 1 }}
      >
        Busket Total
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Coupon Code"
        sx={{ width: "100%", background: "#fff" }}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant="contained"
        onClick={handleDiscount}
        sx={{ position: "absolute", right: "20px", height: "55px" }}
      >
        Apply
      </Button>
      {disCount && (
        <Button onClick={handleDisDelete} sx={{ color: "red" }}>
          {text}
          <DeleteIcon></DeleteIcon>
        </Button>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
          mt: 2,
          p: 2,
          borderBottom: "1px solid #fff",
        }}
      >
        <Typography>Subtotal</Typography>
        <Typography>${allCart.subTotal}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",
          mt: 1,
          p: 2,
          borderBottom: "1px solid #fff",
        }}
      >
        <Typography>Vat</Typography>
        <Typography>${allCart.vat}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#fff",

          p: 2,
        }}
      >
        <Typography>Total</Typography>
        <Typography>${
        disCountPrice}</Typography>
      </Box>
      <Button variant="contained" sx={{ width: "100%" }}>
        <Link style={{ textDecoration: "none", color: "white" }} to="/checkout">
          {" "}
          Proceed to Checkout
        </Link>
      </Button>
    </Box>
  );
}

export default Cart;
