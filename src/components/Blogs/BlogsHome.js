import React, { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import BlogsBanner from "./BlogsBanner";
import BlogSearch from "./BlogSearch";
import BlogsTopBanner from "./BlogsTopBanner";
import { Box } from "@mui/material";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import BlogsCourse from "./BlogsCourse";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
function BlogsHome() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [isClick, setIsClick] = useState(false);
  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlog = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const pageNum = Math.ceil(blogs.length / blogsPerPage);
  const handleChange = (event, currentBlog) => {
    setCurrentPage(currentBlog);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen2 = () => {
    setOpen2(true);
    setIsClick(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  return (
    <>
      <Header
        color={"#fff"}
        handleOpen={handleOpen}
        handleOpen2={handleOpen2}
      />
      <Login
        open={open}
        handleClose={handleClose}
        handleOpen2={handleOpen2}
      ></Login>
      <Register
        open2={open2}
        handleClose2={handleClose2}
        handleOpen={handleOpen}
        isClick={isClick}
      ></Register>
      <Box sx={{ background: "#EDF5FF" }}>
        <BlogsBanner />
        <BlogsTopBanner blogs={blogs} />
        <BlogSearch blogs={currentBlog} />
        <Stack spacing={4} sx={{ textAlign: "center", mt: 6, pb: 6 }}>
          <Pagination
            count={pageNum}
            page={currentPage}
            onChange={handleChange}
            sx={{ display: "flex", justifyContent: "center" }}
          />
        </Stack>
      </Box>
      <BlogsCourse />
      <Footer></Footer>
    </>
  );
}

export default BlogsHome;
