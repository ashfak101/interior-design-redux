import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";

import { DataContext } from "../../context/DataProvider";
function OrderItem() {
  const [state] = useContext(DataContext);

  console.log(state.finalTotal);
  return (
    <Box
      sx={{
        background: "#ffffff",
        p: {
          xs: "0",
          md: "10",
        },
        mb: 10,
        borderRadius: "10px",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: "700",
            fontFamily: "Roboto",
            marginBottom: "20px",
          }}
        >
          Your Order
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell>Course Name</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">SubTotal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.cart.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.courseName}</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">
                    ${row.price * row.quantity}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">${state.finalTotal}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell>Tax</TableCell>
                <TableCell align="right">${state.vat}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">${state.disCountPrice}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default OrderItem;
