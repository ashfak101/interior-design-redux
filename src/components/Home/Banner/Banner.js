import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bgImg from "../../../images/Banner/bg.png";
import Interior from "../../../images/Banner/Interior.png";
import IntButton from "../../Utils/IntButton";
export default function Banner() {
  const bgImage = {
    background: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <Box sx={bgImage}>
      <Box sx={{ paddingTop: "223px", textAlign: "center" }}>
        <img
          style={{
            width: "50%",
          }}
          src={Interior}
          alt=""
        />

        <Box
          sx={{
            position: "absolute",
            top: "231px",
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: {
                xs: "24px",
                sm: "36px",
                md: "36.6334px",
                lg: "51.6334px",
              },
              lineHeight: "70px",
              color: "#282828",
            }}
          >
            New Level of
          </Typography>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontWeight: "900",
              fontSize: {
                xs: "100px",
                sm: "50px",
                md: "100.34px",
                lg: "175.34px",
              },
              lineHeight: {
                lg: "180px",
                md: "50px",
                sm: "0px",
                xs: "50px",
              },
              color: "#282828",
              marginBottom: "60px",
            }}
          >
            Interior
          </Typography>
          <IntButton text={"Learn More"}></IntButton>
        </Box>
      </Box>
    </Box>
  );
}
