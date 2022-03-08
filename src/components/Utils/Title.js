import { Box, Typography } from "@mui/material";
import React from "react";

function Title({ text1, text2 }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: "48px",
          fontWeight: "900",
          lineHeight: "57.3px",
          fontFamily: "Roboto",
          color: "#282828",

          width: {
            xs: "100%",
            md: "577px",
            lg: "577px",
          },
          m: "0 auto",
          mb: "40px",
        }}
      >
        {text1}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "23.3px",
          fontFamily: "Roboto",
          color: "#282828",
          width: {
            lg: "621px",
          },
          textAlign: "center",
          m: "0 auto",
        }}
      >
        {text2}
      </Typography>
    </Box>
  );
}

export default Title;
