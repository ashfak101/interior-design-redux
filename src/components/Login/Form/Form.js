import { Button, InputLabel, TextField } from "@mui/material";
import React, { useState } from "react";
// import Box from "@mui/material/Box";

// import Button from "@mui/material/Button";
// import { InputLabel, TextField, Typography } from "@mui/material";

export default function Form({
  setUser,
  text,
  registerWithEmailPass,

  loginWithEmail,
  isClick,
}) {
  const style = {
    textFieldStyle: {
      fontSize: "12px",
      color: "#494949",
      lineHeight: "8.58px",
    },
  };

  const [data, setData] = useState({});
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isClick) {
      registerWithEmailPass(data.email, data.password)
        .then((results) => {
          const user = results.user;
          setUser(user);
        })
        .catch((error) => {});
    } else {
      loginWithEmail(data.email, data.password).then((results) => {
        const user = results.user;
        setUser(user);
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputLabel sx={{ fontFamily: "lato", fontSize: "12px" }}>
        Email
      </InputLabel>
      <TextField
        onChange={handleChange}
        type="email"
        name="email"
        id="outlined-name"
        sx={{ width: "100%", ...style.textFieldStyle }}
      ></TextField>
      <InputLabel sx={{ fontFamily: "lato", fontSize: "12px" }}>
        Password
      </InputLabel>
      <TextField
        id="outlined-name"
        onChange={handleChange}
        name="password"
        sx={{ width: "100%", ...style.textFieldStyle }}
        type="Password"
      ></TextField>
      <Button
        type="submit"
        variant="contained"
        sx={{
          background: "#C63437",
          color: "#fff",
          borderRadius: "2px",
          fontSize: "12px",
          display: "block",
          width: "100%",
          marginTop: "20px",
          padding: "8px 0",
        }}
      >
        {text}
      </Button>
    </form>
  );
}
