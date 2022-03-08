import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import StarRateIcon from "@mui/icons-material/StarRate";
import ShareIcon from "@mui/icons-material/Share";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Link } from "react-router-dom";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function SharedGrid({ data }) {
  // console.log(data);
  return (
    <Grid
      item
      sx={{
        padding: "20px",

        textAlign: "center",
      }}
      xs={12}
      md={6}
      lg={4}
    >
      <Item
        sx={{
          background: "transparent",
          border: "1px solid rgba(40, 40, 40, 0.24)",
          boxShadow: "none",
          p: "20px",
        }}
      >
        <img style={{ width: "100%" }} src={data.img} alt="" />

        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#3F3F3F",
            margin: "30px 0",
            textAlign: "left",
          }}
        >
          {data.name}
        </Typography>
        <Link to={`/courseHome/${data.id}`}>
          {" "}
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: "700",
              color: "#3F3F3F",
              margin: "30px 0",
              textAlign: "left",
            }}
          >
            {data.courseName}
          </Typography>
        </Link>
        {data.blogId && (
          <Typography
            sx={{
              fonFamily: "Roboto",
              fontSize: "16px",
              fontWeight: "400",
              color: "#3F3F3F",

              textAlign: "left",
            }}
          >
            {data.description.slice(0, 100)}
          </Typography>
        )}
        <Box
          sx={{ display: "flex", justifyContent: "space-between", p: "10px 0" }}
        >
          {data.people && (
            <Typography
              display={{
                display: "flex",
                fontSize: "16px",
                color: "#3F3F3F",
                fontWeight: "500",
              }}
            >
              <PersonIcon />
              {data.people} User
            </Typography>
          )}
          {data.rating && (
            <Typography
              display={{
                display: "flex",
                fontSize: "16px",
                color: "#3F3F3F",
                fontWeight: "500",
              }}
            >
              <StarRateIcon sx={{ color: "#E8B237" }} /> {data.rating} Rating
            </Typography>
          )}
          {data.blogId && (
            <Typography
              display={{
                display: "flex",
                fontSize: "14px",
                color: "#3F3F3F",
                fontWeight: "500",
              }}
            >
              <DateRangeIcon />
              28 July 2020
            </Typography>
          )}
          {data.blogId && (
            <Typography
              display={{
                display: "flex",
                fontSize: "14px",
                color: "#3F3F3F",
                fontWeight: "500",
              }}
            >
              <ShareIcon /> share now
            </Typography>
          )}
        </Box>
      </Item>
    </Grid>
  );
}

export default SharedGrid;
