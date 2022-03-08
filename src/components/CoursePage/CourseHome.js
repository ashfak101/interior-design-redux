import { Box } from "@mui/material";
import React, { useState } from "react";
// import {  } from "../../context/DataProvider";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import {useDispatch, useSelector} from 'react-redux'
import CourseDetails from "./CourseDetails";
import CourseHero from "./CourseHero";
import CourseReview from "./CourseReview";
import { addToCart } from "../../redux/actions/cartActions";

function CourseHome() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  // const [state, dispatch] = useContext(DataContext);
  const cart = useSelector((state) => state.allCart.cart)
  const dispatch =useDispatch()
  const handleAddToCart = (singleCourse) => {
    const exists = cart.find((cd) => cd.id === singleCourse.id);
    let newCart = [];
    if (exists) {
      const remaining = cart.filter((cd) => cd.id !== singleCourse.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...remaining, singleCourse];
    } else {
      singleCourse.quantity = 1;
      newCart = [...cart, singleCourse];
    }
    dispatch(addToCart(newCart));
    setIsTrue(true);
  };
  setTimeout(() => {
    setIsTrue(false);
  }, 1000);
  console.log(cart);
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
