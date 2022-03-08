import { Box, Container, Typography } from "@mui/material";
import React from "react";
import bgImg from "../../images/blogsbg.png";
const bgImage = {
  background: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "80vh",
};
function BlogsBanner() {
  return (
    <Box style={bgImage}>
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
            position: "absolute",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "56px",
              fontFamily: "Lato",
              color: "#fff",
            }}
          >
            Our Blogs
          </Typography>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "32px",
              color: "#fff",

              textAlign: "center",
            }}
          >
            Within salons, hair stylists may <br></br> rent their own station
            and manage their clients independently.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default BlogsBanner;
