import { Box, Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "18px",
      color: "#424770",
      letterSpacing: "0.025em",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};
function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [cardName, setCardName] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardNumberElement);

    if (card == null) {
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (payload.error) {
      console.log("[error]", payload.error);
      setErrorMessage(payload.error.message);
      setPaymentMethod(null);
    } else {
      console.log("[PaymentMethod]", payload.paymentMethod);
      setCardName(payload.paymentMethod.card.brand);
      setPaymentMethod(payload.paymentMethod);
      setErrorMessage(null);
    }
  };
  setTimeout(() => {
    setCardName(null);
    setErrorMessage(null);
  }, 3000);
  return (
    <Box sx={{ background: "#FAFAFA", p: 5 }}>
      {cardName && <Alert severity="info"> Card Type : {cardName} </Alert>}
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="cardNumber"
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            color: "#201E1E",
          }}
        >
          Card Number
        </label>{" "}
        <Box
          sx={{
            background: "#FFFFFF",
            border: "1px solid #CCCCCC ",
            p: 2,
            m: 1,
            borderRadius: "6px",
          }}
        >
          <CardNumberElement
            style={{ border: "1px solid #333" }}
            id="cardNumber"
            options={ELEMENT_OPTIONS}
          />
        </Box>
        <label htmlFor="expiry">Expiration</label>
        <Box
          sx={{
            background: "#FFFFFF",
            border: "1px solid #CCCCCC ",
            p: 2,
            m: 1,
            borderRadius: "6px",
          }}
        >
          <CardExpiryElement
            style={{ width: "100%" }}
            id="expiry"
            options={ELEMENT_OPTIONS}
          />{" "}
        </Box>
        <label htmlFor="cvc">CVC</label>
        <Box
          sx={{
            background: "#FFFFFF",
            border: "1px solid #CCCCCC ",
            p: 2,
            m: 1,
            borderRadius: "6px",
          }}
        >
          <CardCvcElement id="cvc" options={ELEMENT_OPTIONS} />
        </Box>
        {/* {errorMessage && <ErrorResult>{errorMessage}</ErrorResult>}
      {paymentMethod && <Result>Got PaymentMethod: {paymentMethod.id}</Result>} */}
        <Button variant="contained" type="submit" disabled={!stripe}>
          Place Order
        </Button>
      </form>
      <Box sx={{ p: 5 }}>
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        {cardName && (
          <Alert severity="success">Your order Successfully placed .</Alert>
        )}
      </Box>
    </Box>
  );
}

export default CheckoutForm;
