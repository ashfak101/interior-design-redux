import { Grid, Typography } from "@mui/material";
import React from "react";

function Services() {
  const services = [
    {
      image: "image/service/Courses.png",
      name: "Courses Free",
    },
    {
      image: "image/service/Quiz.png",
      name: "Quiz Free",
    },
    {
      image: "image/service/resource.png",
      name: "Resource Free",
    },
  ];

  return (
    <div>
      <Grid
        container
        sx={{
          height: "480.63px",
          my: "120px",
        }}
      >
        {services.map((service) => (
          <Grid
            item
            xs={12}
            md={4}
            lg={4}
            sx={{
              position: "relative",
              "&:first-child": {
                background: "#FFFEF5",
              },
              "&:nth-child(2)": {
                background: "#FFF8F8",
              },
              "&:last-child": {
                background: "#F4FFFE",
              },
            }}
            key={service.name}
          >
            <img
              style={{ width: "100%", marginTop: "127px" }}
              src={service.image}
              alt={service.name}
            />
            <Typography
              sx={{
                position: "absolute",
                right: "155px",
                bottom: 0,
                fontFamily: "Roboto",
                fontWeight: "700",
                fontSize: "48px",
                width: "100px",
                color: "#FFFFFF",
                "&:nth-child(2)": {
                  right: "110px",
                },
              }}
            >
              {service.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Services;
