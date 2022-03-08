import React, { useState } from "react";

import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import Services from "../../Services/Services";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Hero from "../Hero/Hero";
import HomeBlogs from "../HomeBlogs/HomeBlogs";
import Reviews from "../Reviews/Reviews";
import VideoSection from "../VideoSection/VideoSection";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [isClick, setIsClick] = useState(false);
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
    <div>
      <Header
        handleOpen={handleOpen}
        handleOpen2={handleOpen2}
        color={"#282828"}
      />
      <Banner />
      <Login open={open} handleClose={handleClose} handleOpen2={handleOpen2} />
      <Register
        open2={open2}
        handleClose2={handleClose2}
        handleOpen={handleOpen}
        isClick={isClick}
      />
      <Hero />
      <Services />
      <Courses />
      <VideoSection />
      <Reviews />
      <HomeBlogs />
      <Footer />
    </div>
  );
}
