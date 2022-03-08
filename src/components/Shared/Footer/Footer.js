import React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

import logo from "../../../images/Logo/Frame1.png";
import Rating from "@mui/material/Rating";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  const styles = {
    footerTypo: {
      fontfamily: "Roboto",
      fontsize: "20px",
      fontWeight: "700",
      mb: "20px",
    },
    links: {
      fontFamily: "Roboto",
      fontSize: "14px",
      fontWeight: "400",
      mb: "15px",
    },
    icon: {
      background: " rgba(255, 255, 255, 0.1)",
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: "20px",
      border: "1px solid #white",
      p: "5px",
      borderRadius: "50%",
      mr: 2,
    },
  };
  return (
    <>
      <Box sx={{ background: " #282828", color: "#FFFFFF", pt: "121px" }}>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} md={5} lg={5}>
              <img src={logo} alt="" />
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "18px",
                  fontWeight: "400",
                  width: "366.95px",
                  mb: {
                    xs: "30px",
                  },
                }}
              >
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or ra
              </Typography>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <Typography sx={{ ...styles.footerTypo }}>Links</Typography>
              <Box>
                <Typography sx={{ ...styles.links }}>Accreditation</Typography>
                <Typography sx={{ ...styles.links }}>Student Id</Typography>
                <Typography sx={{ ...styles.links }}>Courses</Typography>
                <Typography sx={{ ...styles.links }}>Features</Typography>
                <Typography sx={{ ...styles.links }}>Pricing</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={2} lg={2}>
              <Typography sx={{ ...styles.footerTypo }}>
                Important Links
              </Typography>
              <Box>
                <Typography sx={{ ...styles.links }}>Course</Typography>
                <Typography sx={{ ...styles.links }}>Reviews</Typography>
                <Typography sx={{ ...styles.links }}>Free Courses</Typography>
                <Typography sx={{ ...styles.links }}>
                  Term & Condition
                </Typography>
                <Typography sx={{ ...styles.links }}>Contact Us</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Box
                sx={{
                  width: "207px",
                  height: "132px",

                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "14px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Roboto",
                    fontWeight: "700",
                    mt: 6,
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Excellent service
                </Typography>
                <Box sx={{ textAlign: "center" }}>
                  <Rating name="size-small" defaultValue={5} size="small" />
                  <Typography>4.5/5.0-78 Rating</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    mt: 4,
                    background: "rgba(255, 255, 255, 0.04)",
                    borderRadius: "14px",
                    p: 1,
                  }}
                >
                  <Typography sx={{ fontSize: "12px" }}>Feb 02</Typography>
                  <Typography sx={{ fontSize: "12px" }}>
                    Verified By live chat
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Divider
            sx={{ borderColor: "rgba(255, 255, 255, 0.41)", mt: "120px" }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 4,
              flexDirection: {
                xs: "column",
                md: "row",
              },
              textAlign: {
                xs: "center",
              },
            }}
          >
            <Typography sx={{ color: "rgba(255, 255, 255, 0.5)" }}>
              © Copyright2020 design by{" "}
            </Typography>
            <Box>
              <FacebookIcon sx={{ ...styles.icon }} />
              <TwitterIcon sx={{ ...styles.icon }} />
              <InstagramIcon sx={{ ...styles.icon }} />
              <LinkedInIcon sx={{ ...styles.icon }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
