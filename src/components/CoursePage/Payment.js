import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { Box, Typography } from "@mui/material";
const stripePromise = loadStripe(
  "pk_test_51KTiv4IeNmaeO3UvTK6DRwRL5nSk9yO5tG5ddDu3aBLyQkovoMlyKPA4GRx1nul5SS8f5Bc7VfHQhntpaEnUOtHd00SFHb06oT"
);
function Payment() {
  return (
    <Box
      sx={{
        background: "#ffffff",
        p: {
          xs: "0",
          md: "10",
        },
        borderRadius: "10px",
        mb: 3,
      }}
    >
      <Elements stripe={stripePromise}>
        <Box>
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "700",
              fontFamily: "Roboto",
              marginBottom: "20px",
            }}
          >
            Payment Method
          </Typography>
        </Box>
        <CheckoutForm />
      </Elements>
    </Box>
  );
}

export default Payment;
