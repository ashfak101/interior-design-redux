import { Box, TableCell, TableRow, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import { DataContext } from "../../context/DataProvider";
import DeleteIcon from "@mui/icons-material/Delete";
function CartItem({ cd, setFinalTotal }) {
  const [state, dispatch] = useContext(DataContext);
  const [quantity, setQuantity] = useState(cd.quantity);
  let total = cd.quantity * cd.price;

  const increaseQuantity = () => {
    setQuantity((cd.quantity += 1));
  };
  const decreaseQuantity = () => {
    if (cd.quantity > 1) {
      setQuantity((cd.quantity -= 1));
    }
  };
  let totalQuantity = 0;
  let allTotal = 0;
  for (const i of state.cart) {
    if (!i.quantity) {
      i.quantity = 1;
    } else {
      allTotal = allTotal + i.price * i.quantity;
      totalQuantity = totalQuantity + i.quantity;
    }
  }
  setFinalTotal(allTotal);
  console.log(quantity);
  const handleRemoveCart = (id) => {
    const remaining = state.cart?.filter((cd) => cd.id !== id);

    dispatch({
      type: "cart",
      value: remaining,
    });
  };
  useEffect(() => {
    dispatch({
      type: "finalTotal",
      value: allTotal,
    });
  }, [allTotal, dispatch]);

  console.log(state.cart);

  return (
    <TableRow hover role="checkbox" tabIndex={-1}>
      {" "}
      <TableCell sx={{ display: "flex", maxWidth: "350px" }}>
        <img style={{ height: "50px", minWidth: "9px" }} src={cd.img} alt="" />
        <Typography> {cd.courseName}</Typography>
      </TableCell>{" "}
      <TableCell>$ {cd.price}</TableCell>{" "}
      <TableCell>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <RemoveIcon
            onClick={decreaseQuantity}
            sx={{
              cursor: "pointer",
              "&:active": {
                transform: "scale(1.2)",
                color: "red",
              },
            }}
          />

          <Typography sx={{ p: 2, border: "1px solid #333" }}>
            {quantity}
          </Typography>
          {/* id="outlined-basic"
            value=
            variant="outlined"
            sx={{ width: "50px", height: "50px", border: "none" }}
          /> */}
          <AddCircleOutlineIcon
            onClick={increaseQuantity}
            sx={{
              cursor: "pointer",
              "&:active": {
                transform: "scale(1.2)",
                color: "red",
              },
            }}
          />
        </Box>
      </TableCell>{" "}
      <TableCell>
        <Box sx={{ display: "flex" }}>
          {" "}
          ${total} <DeleteIcon onClick={() => handleRemoveCart(cd.id)} />
        </Box>
      </TableCell>{" "}
    </TableRow>
  );
}

export default CartItem;
