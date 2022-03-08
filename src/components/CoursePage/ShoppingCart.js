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
import { DataContext } from "../../context/DataProvider";
import React, { useContext } from "react";
import CartItem from "./CartItem";

function ShoppingCart({ finalTotal, setFinalTotal }) {
  const [state] = useContext(DataContext);
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
              {state.cart?.map((cd) => (
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
