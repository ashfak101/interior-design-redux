import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import PersonIcon from "@mui/icons-material/Person";
import StarRateIcon from "@mui/icons-material/StarRate";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function BlogsCourse() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, [setCourses]);

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
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), #2D2BB0",
      }}
    >
      <Box>
        <Container maxWidth="xl">
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                padding: "50px 0",
              }}
            >
              <Box>
                <Typography
                  sx={{ color: "#F4C622", fontSize: "23px", fontWeight: "900" }}
                >
                  SIMILAR COURSES
                </Typography>
                <Typography
                  sx={{ color: "#FFFFFF", fontSize: "56px", fontWeight: "900" }}
                >
                  Courses That You Might Like
                </Typography>
                <Typography
                  sx={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "400" }}
                >
                  Whithin Salons,hair stylists may rent their own station{" "}
                </Typography>
                <Typography
                  sx={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "400" }}
                >
                  manage their clients independently
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    width: "63.09px",
                    color: "#FFFFFF",
                    height: "63.09px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #FFF",
                    borderRadius: "50%",
                  }}
                >
                  <ArrowBackIosIcon
                    onClick={() => silder?.current?.slickPrev()}
                    sx={{
                      "&:hover": {
                        color: "#FFFFFF",
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    background: "rgba(40, 40, 40, 0.1)",
                    width: "63.09px",
                    height: "63.09px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #FFF",
                    borderRadius: "50%",
                    color: "#FFFFFF",
                  }}
                >
                  <ArrowForwardIosIcon
                    onClick={() => silder?.current?.slickNext()}
                    sx={{
                      color: "#FFFFFF",
                      "&:active": {
                        color: "#fff",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Container>
          <Box>
            <Slider ref={silder} {...settings}>
              {courses.map((course) => (
                <Box key={course.id} course={course}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      margin: "0px 10px",
                      boxShadow: 3,
                      p: 2,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="194"
                      image={course.img}
                    />
                    <CardContent>
                      <Typography
                        sx={{
                          fontSize: "24px",
                          fontWeight: "700",
                          color: "#333",
                        }}
                      >
                        {course.courseName}
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "20px",
                      }}
                    >
                      <Typography
                        display={{
                          display: "flex",
                          fontSize: "16px",
                          color: "#3F3F3F",
                          fontWeight: "500",
                        }}
                      >
                        <PersonIcon />
                        {course.people} User
                      </Typography>
                    </Box>
                  </Card>
                </Box>
              ))}
            </Slider>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default BlogsCourse;
