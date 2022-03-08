import {
  Avatar,
  Box,
  CardContent,
  Container,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Card from "@mui/material/Card";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const styles = {
  btn1: {
    height: "63.09px",
    padding: "0px 30px",
    background: "#282828",
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: "16px",
    cursor: "pointer",
  },
  card: {
    width: {
      xs: "330px",
      lg: "400px",
      md: "400px",
    },
    border: "1px solid #e6e6e6",
    boxShadow: "none",
    marginRight: "0px",
    background: "#FFFFFF",
  },
};
function CourseReview() {
  const [reviews, setReviews] = useState([]);
  const silder = useRef(null);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container maxWidth="xl" sx={{ marginBottom: "100px" }}>
      <Box
        sx={{
          position: "relative",
          margin: " 120px 0 75px 0",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
            lg: "row",
          },

          justifyContent: "space-between",
          alignItems: "center",
          "&:after": {
            content: "''",
            width: {
              xs: "100%",
              md: "577px",
              lg: "788px",
            },
            height: "1px",
            background: "#e6e6e6",
            position: "absolute",
            left: {
              xs: "0px",
              md: "30%",
              lg: "30%",
            },
            bottom: {
              xs: "80px",
              md: "40px",
              lg: "40px",
            },
          },
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: "48px",
              fontWeight: "900",
              lineHeight: "57.3px",
              fontFamily: "Roboto",
              color: "#282828",

              m: "0 auto",
              mb: "40px",
            }}
          >
            What Our <br />
            Students Saying
          </Typography>
        </Box>
        <Box>
          <ArrowBackIosIcon
            onClick={() => silder?.current?.slickPrev()}
            sx={{
              ...styles.btn1,
              "&:hover": {
                color: "#282828",
                background: "rgba(40, 40, 40, 0.1)",
              },
            }}
          />
          <ArrowForwardIosIcon
            onClick={() => silder?.current?.slickNext()}
            sx={{
              ...styles.btn1,
              background: "rgba(40, 40, 40, 0.1)",
              color: "black",
              "&:active": {
                color: "#fff",
                background: "#282828",
              },
            }}
          />
        </Box>
      </Box>

      <Box sx={{ margin: { xs: "0 25px", md: "0 46px", lg: "0 46px" } }}>
        <Slider ref={silder} {...settings}>
          {reviews.map((review) => (
            <Card
              key={review.id}
              sx={{ boxShadow: "none", width: "375px", p: 0, m: 0 }}
            >
              <CardContent sx={{ ...styles.card }}>
                <Rating name="read-only" value={review.rating} readOnly />
                <Typography
                  sx={{
                    width: {
                      xs: "100%",
                      md: "220px",
                      lg: "220px",
                      xl: "220px",
                    },
                    fontSize: "18px",
                    fontStyle: "italic",
                    fontFamily: "Roboto",
                    margin: {
                      xs: "20px auto",
                      md: " 60px",
                      lg: "60px",
                    },
                    padding: "20px 0",
                    color: "#282828",
                  }}
                >
                  {review.description}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    margin: "50px 60px",
                  }}
                >
                  <Avatar
                    alt=""
                    src={review.img}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box
                    sx={{
                      ml: 1,
                      position: "relative",
                      "&:before": {
                        content: "''",
                        width: "250px",
                        height: "1px",
                        top: "-30px",
                        left: { xs: "-100px", md: "-40px", lg: "-40px" },
                        background: "#e6e6e6",
                        position: "absolute",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontFamily: "Roboto",
                        color: "#282828",
                      }}
                    >
                      {review.name}
                    </Typography>
                    <Typography>{review.person}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Box>
    </Container>
  );
}

export default CourseReview;
