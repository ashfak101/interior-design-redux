import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function ShoppingCart({ finalTotal, setFinalTotal }) {
  // const [state] = useContext(DataContext);

  const  cart  = useSelector((state) => state.allCart.cart);
  return (
    <>
      <Paper sx={{ width: "100%", boxShadow: "none" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Typography variant="h4" sx={{ p: 1, fontWeight: "bold" }}>
            {" "}
            Shopping Cart
          </Typography>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell> Course Name</TableCell>
                <TableCell> Price</TableCell>
                <TableCell> Quantity</TableCell>
                <TableCell> Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart?.map((cd) => (
                <CartItem
                  key={cd.id}
                  finalTotal={finalTotal}
                  setFinalTotal={setFinalTotal}
                  cd={cd}
                ></CartItem>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default ShoppingCart;
