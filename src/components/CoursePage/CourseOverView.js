import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../../images/120.png";
import img2 from "../../images/certificate.png";
function CourseOverView({ des }) {
  console.log(des);
  return (
    <Box>
      <Container maxWidth="xl" sx={{ pt: 2 }}>
        {" "}
        <Grid
          container
          spacing={5}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Grid item xs={12} md={9} xl={8} sx={{ p: 0 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "700",
                fontSize: "48px",
                fontFamily: "Roboto",
                mb: 4,
              }}
            >
              Course Overview
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "18px",
                fontFamily: "Roboto",
                mt: 4,
              }}
            >
              {des}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} xl={4}>
            <img style={{ width: "100%" }} src={img1} alt="" />
            <Box
              sx={{
                textAlign: "center",
                p: 4,
                background: "rgba(196, 196, 196, 0.2)",
                mt: 2,
              }}
            >
              <img style={{ width: "100%" }} src={img2} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CourseOverView;
