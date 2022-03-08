import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import hero from "../../../images/Banner/hero.png";
import IntButton from "../../Utils/IntButton";
function Hero() {
  const style = {
    text1: {
      textAlign: "left",
      fontSize: "48px",
      fontWeight: "900",
      lineHeight: "60px",
      fontFamily: "Roboto",
      color: "#282828",
    },
    text2: {
      fontSize: "16px",
      color: "#282828",
      textAlign: "left",
      my: "40px",
      pl: {
        xs: "0",
        md: "120px",
        lg: "122px",
      },
    },
  };
  return (
    <>
      <Container maxWidth="xl" sx={{ mt: "120px" }}>
        <Grid container spacing="2">
          <Grid item xs={12} md={6}>
            <img
              style={{ display: "block", width: "100%" }}
              src={hero}
              alt=""
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                ...style.text1,
                pl: {
                  xs: "0",
                  md: "120px",
                  lg: "122px",
                },
                mt: "120px",
              }}
            >
              Lorem Simply Dummy Text the Prinng Ipsum
            </Typography>
            <Typography sx={{ ...style.text2 }}>
              The basic philosophy of our studio is create individual,
              aesthetically stunning soluons for our customers by lightning-fast
              development of projects employing unique styles and architecture.
              Even if you don’t have a ready sketch of what you want –{" "}
            </Typography>
            <Typography sx={{ ...style.text2 }}>
              we will help you to get the result you dreamed of. sketch of what
              you want – we The basic philosophy of our studio is create
              individual, aesthetically stunning solutions for our customers by
              lightnifast development of projects employing unique styles and
              architecture.
            </Typography>
            <Box
              sx={{
                textAlign: "left",
                marginTop: "80px",
                pl: {
                  xs: "10px",
                  md: "140px",
                  lg: "140px",
                },
              }}
            >
              <IntButton text={"Search Now"}></IntButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Hero;
