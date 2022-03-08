import { Box, Container, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Title from "../../Utils/Title";
import bgImg from "../../../images/courses.png";
import IntButton from "../../Utils/IntButton";
import SharedGrid from "../SharedGrid/SharedGrid";
import { Link } from "react-router-dom";
import  {useDispatch} from 'react-redux'
import { fetchBlogs } from "../../../redux/actions/blogsAction";
const bgImage = {
  background: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
function HomeBlogs() {
  const [blogs, setBlogs] = useState([]);
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch( fetchBlogs());
  },[dispatch]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <Box sx={bgImage}>
      <Box
        sx={{
          marginTop: { 
            md: "0",
            lg: "0",
          },
          pt: "100px",
        }}
      >
        <Title
          text1={"Our Popular Blog"}
          text2={
            "The basic philosophy of our studio is create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique.The basic philosophy of our studio is create individual,"
          }
        />
      </Box>
      <Container
        maxWidth="xl"
        sx={{ marginTop: "60px", paddingBottom: "100px", textAlign: "center" }}
      >
        <Grid container spacing={1} sx={{ marginBottom: "50px" }}>
          {blogs.slice(0, 3).map((blog) => (
            <SharedGrid key={blog.id} data={blog}></SharedGrid>
          ))}
        </Grid>
        <Link style={{ textDecoration: "none" }} to="/blogs">
          <IntButton text={"View All"}></IntButton>
        </Link>
      </Container>
    </Box>
  );
}

export default HomeBlogs;
