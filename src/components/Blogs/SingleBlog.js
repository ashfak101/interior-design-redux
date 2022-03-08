import { Box, Container, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bgImg from "../../images/blogsbg.png";
import Header from "../Shared/Header/Header";
import sbgImg from "../../images/sblog.png";
import { DataContext } from "../../context/DataProvider";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SingleBlogsDes from "./SingleBlogsDes";
const bgImage = {
  background: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
};

function SingleBlog() {
  const { id } = useParams();
  const [state, dispatch] = useContext(DataContext);
  const [blog, setBlog] = useState({});
  useEffect(() => {
    fetch(`/blogs.json`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "blogs", value: data });
      });
  }, [dispatch]);
  console.log(state.blogs);

  useEffect(() => {
    const singleBlog = state.blogs?.find((blog) => blog.id === id);
    setBlog(singleBlog);
  }, [id, state.blogs]);
  console.log(blog);
  return (
    <>
      <Box style={bgImage}>
        <Header color={"#fff"}></Header>
        <Container maxWidth="xl" sx={{ paddingTop: 15, textAlign: "center" }}>
          <Box
            sx={{
              display: "inline-block",
              p: "47px",
              background: "rgba(0, 0, 0, 0.13)",
              backdropFilter: "blur(20px)",
            }}
          >
            <img style={{ width: "100%" }} src={sbgImg} alt="" />
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "45px",
                },
                fontWeight: "900",
                fontFamily: "Lato",
                color: "#fff",
                mt: "50px",
              }}
            >
              {blog?.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
                pl: "140px",
                color: "#fff",
                mt: "30px",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  fonFamily: "Google Sans",
                  fontSize: "18px",
                  fontWeight: "400",
                  marginRight: "71px",
                }}
              >
                <CalendarTodayIcon
                  sx={{
                    mr: "10px",
                  }}
                ></CalendarTodayIcon>
                {blog?.date}
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  fonFamily: "Google Sans",
                  fontSize: "18px",
                  fontWeight: "400",
                }}
              >
                {" "}
                <VisibilityIcon
                  sx={{
                    mr: "10px",
                  }}
                ></VisibilityIcon>
                11045 Views
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <SingleBlogsDes />
    </>
  );
}

export default SingleBlog;
