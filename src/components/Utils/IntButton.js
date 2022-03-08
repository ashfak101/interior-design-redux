import { Button } from "@mui/material";
import React from "react";

const btnInt = {
  fontSize: "16px",
  fontFamily: "Roboto",
  fontWeight: "700",
  lineHeight: "19.2px",
  color: "#fff",
  background: "#282828",
  flexDirection: "column",
  borderRadius: "0",
  position: "relative",
  width: "180px",
  height: "60px",
  "&:hover": {
    color: "#282828",
  },

  "&::after": {
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    border: "1px solid #000000",
    left: "16px",
    top: "10px",
    borderTop: "none",
    borderLeft: "none",
  },
  "&::before": {
    content: "''",
    width: "100%",
    height: "100%",
    position: "absolute",
    border: "1px solid #000000",
    right: "16px",
    bottom: "10px",
    borderRight: "none",
    borderBottom: "none",
  },
};
export default function IntButton({ text }) {
  return <Button sx={btnInt}>{text}</Button>;
}
