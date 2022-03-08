import { Box } from "@mui/material";
import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

import CourseDetails from "./CourseDetails";
import CourseHero from "./CourseHero";
import CourseReview from "./CourseReview";

function CourseHome() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const [state, dispatch] = useContext(DataContext);
  const handleAddToCart = (singleCourse) => {
    const exists = state.cart.find((cd) => cd.id === singleCourse.id);
    let newCart = [];
    if (exists) {
      const remaining = state.cart.filter((cd) => cd.id !== singleCourse.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...remaining, singleCourse];
    } else {
      singleCourse.quantity = 1;
      newCart = [...state.cart, singleCourse];
    }
    dispatch({ type: "cart", value: newCart });
    setIsTrue(true);
  };
  setTimeout(() => {
    setIsTrue(false);
  }, 1000);
  console.log(state.cart);
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
    <Box>
      <Header
        color={"white"}
        handleOpen={handleOpen}
        handleOpen2={handleOpen2}
      />
      <Login open={open} handleClose={handleClose} handleOpen2={handleOpen2} />
      <Register
        open2={open2}
        handleClose2={handleClose2}
        handleOpen={handleOpen}
        isClick={isClick}
      />
      <CourseHero />
      <CourseDetails handleAddToCart={handleAddToCart} isTrue={isTrue} />
      <CourseReview />
      <Footer />
    </Box>
  );
}

export default CourseHome;
