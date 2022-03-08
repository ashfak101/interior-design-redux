import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Form from "../Form/Form";
import useData from "../../Hooks/useData";
import { useNavigate } from "react-router-dom";
export default function Register({ open2, handleClose2, handleOpen, isClick }) {
  const nevigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
  };
  const styleBtn = {
    btn1: {
      display: "block",
      width: "100%",
      fontSize: "12px",
      padding: "8px 20px",
      "&:hover": {
        color: "#282828",
        background: "#C63437",
      },
    },
    text: {
      fontSize: "12px",
      color: "#767676",
      position: "relative",
      "&::after": {
        content: "''",
        position: "absolute",
        width: "127px",
        height: "0.5px",
        right: "5px",
        top: "50%",
        background: "#767676",
      },
      "&::before": {
        content: "''",
        position: "absolute",
        width: "127px",
        height: "0.5px",
        left: "5px",
        top: "50%",
        background: "#767676",
      },
    },
  };
  const {
    registerWithEmailPass,
    setUser,
    loginWithGoogle,
    loginWithFaceBook,
    isLoading,
  } = useData();
  const handleGoolgeLogin = () => {
    loginWithGoogle()
      .then((results) => {
        const user = results.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
    nevigate(`/home`);
  };
  const handleFaceboolLogin = () => {
    loginWithFaceBook()
      .then((results) => {
        const user = results.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(user);
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <Modal
      hideBackdrop
      open={open2}
      onClose={handleClose2}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
      sx={{ background: "rgba(0,0,0,0.8)" }}
      width={600}
    >
      <Box>
        <Box sx={{ ...style, width: 350 }}>
          <Box sx={{ textAlign: "right" }}>
            <Button onClick={handleClose2}>X</Button>
          </Box>
          <Typography
            sx={{
              fontFamily: "lato",
              fontWeight: "700",
              color: "#000000",
              textAlign: "center",
              fontSize: "24px",
              lineHeight: "17.16px",
            }}
          >
            Create Account
          </Typography>
          <Box sx={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              onClick={handleGoolgeLogin}
              sx={{
                ...styleBtn.btn1,
                background: "#4688F1",
                color: "#fff",
                padding: "8px 27px",
                marginBottom: "20px",
              }}
            >
              LOG IN WITH GOOGLE
            </Button>
            <Button
              onClick={handleFaceboolLogin}
              sx={{
                ...styleBtn.btn1,
                background: "#3E5C97",
                color: "#fff",
                marginBottom: "50px",
              }}
            >
              LOG IN WITH FACEBOOK
            </Button>
          </Box>
          <Box>
            <Typography sx={{ ...styleBtn.text, textAlign: "center" }}>
              OR
            </Typography>
            <Form
              text={"CREATE ACCOUNT"}
              registerWithEmailPass={registerWithEmailPass}
              isClick={isClick}
              setUser={setUser}
            />
          </Box>
          <Box sx={{ my: 3, textAlign: "center" }}>
            <Typography
              sx={{
                fontFamily: "lato",
                fontWeight: "700",
                color: "#494949",
                fontSize: "16px",
                lineHeight: "11.46px",
              }}
            >
              Already have an account?{" "}
              <span
                onClick={handleOpen}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Log in
              </span>{" "}
            </Typography>
            <Typography
              sx={{
                fontFamily: "lato",
                fontWeight: "600",
                color: "#767676",
                fontSize: "12px",
                lineHeight: "11.46px",
                m: 2,
              }}
            >
              By signing up or creating an account, you agree to our
            </Typography>
            <Typography
              sx={{
                fontFamily: "lato",
                fontWeight: "600",
                color: "#767676",
                fontSize: "12px",
                lineHeight: "8.46px",
              }}
            >
              <span style={{ textDecoration: "underline" }}>
                {" "}
                Privacy Policy
              </span>{" "}
              and{" "}
              <span style={{ textDecoration: "underline" }}>
                {" "}
                Terms od Service.{" "}
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
