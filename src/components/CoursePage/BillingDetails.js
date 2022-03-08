import { Box, TextField, Typography } from "@mui/material";
import React from "react";

const styles = {
  width: {
    xs: "90%",
    md: "45%",
    lg: "45%",
  },
  m: 2,
};
function BillingDetails() {
  return (
    <div>
      <Box
        sx={{
          background: "#ffffff",
          p: {
            xs: "10",
            md: "10",
          },
          borderRadius: "10px",
          mt: 2,
          mb: 10,
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
            {" "}
            Billing Details
          </Typography>
          <Box>
            <TextField
              sx={{ ...styles }}
              id="outlined-basic"
              label="First Name"
            />
            <TextField
              sx={{ ...styles }}
              id="outlined-basic"
              label="Last Name"
            />
            <TextField sx={{ ...styles }} id="outlined-basic" label="Address" />
            <TextField
              sx={{ ...styles }}
              id="outlined-basic"
              label="Country "
            />
            <TextField sx={{ ...styles }} id="outlined-basic" label="Phone" />
            <TextField
              sx={{ ...styles }}
              id="outlined-basic"
              label="Email Address"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default BillingDetails;
