import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import img from "../../../images/Logo/Frame.png";
import { Link } from "react-router-dom";
import useData from "../../Hooks/useData";

export default function Header({ handleOpen, handleOpen2, color }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const { user, logOut } = useData();
  const headerStyle = {
    menuItem: {
      fontSize: "18px",
      fontWeight: "normal",
      fontFamily: "Roboto",
      lineHeight: "26.1px",
      marginRight: "49px",
    },
    singIn: {
      color: color,
      fontSize: "18px",
      fontWeight: "normal",
      fontFamily: "Roboto",
      lineHeight: "26.1px",
      border: "1px solid #282828",
      padding: "10px 42px",
      marginTop: " 20px",
      marginBottom: " 10px",
      cursor: "pointer",
    },
  };
  return (
    <div>
      <AppBar
        position="static"
        sx={{
          background: "none",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.14)",
          position: "absolute",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img src={img} alt="" />
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img src={img} alt="" />
            </Typography>
            <Box
              sx={{
                flexGrow: 2,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                },
              }}
            >
              {/* for Large Screen Menu */}
              <Typography sx={headerStyle.menuItem}>
                <Link
                  style={{
                    textDecoration: "none",
                    color: color,
                  }}
                  to="/"
                >
                  Home
                </Link>
              </Typography>
              <Typography sx={{ ...headerStyle.menuItem }}>
                {" "}
                <Link
                  style={{
                    textDecoration: "none",
                    color: color,
                  }}
                  to="/blogs"
                >
                  Blogs
                </Link>
              </Typography>

              <Typography sx={headerStyle.menuItem}>
                {" "}
                <Link
                  style={{
                    textDecoration: "none",
                    color: color,
                  }}
                  to="/cart"
                >
                  Cart
                </Link>
              </Typography>

              <Typography sx={headerStyle.menuItem}>
                {" "}
                <Link
                  style={{
                    textDecoration: "none",
                    color: color,
                  }}
                  to="/quiz"
                >
                  Free Quiz
                </Link>
              </Typography>

              {!user?.email && (
                <Typography
                  onClick={handleOpen2}
                  sx={{
                    ...headerStyle.menuItem,
                    color: color,
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Sign Up
                </Typography>
              )}
              {!user?.email && (
                <Typography onClick={handleOpen} sx={headerStyle.singIn}>
                  Sign In
                </Typography>
              )}
              {user?.email && (
                <Typography onClick={logOut} sx={headerStyle.singIn}>
                  Log Out
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                flexDirection: "row-reverse",
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* for Large Screen Menu */}
                <Typography sx={{ ...headerStyle.menuItem }}>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#333",
                    }}
                    to="/"
                  >
                    Home
                  </Link>
                </Typography>
                <Typography sx={headerStyle.menuItem}>
                  {" "}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#333",
                    }}
                    to="/blogs"
                  >
                    Blogs
                  </Link>
                </Typography>

                <Typography sx={headerStyle.menuItem}>
                  {" "}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#333",
                    }}
                    to="/cart"
                  >
                    Cart
                  </Link>
                </Typography>

                <Typography sx={headerStyle.menuItem}>
                  {" "}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#333",
                    }}
                    to="/quiz"
                  >
                    Free Quiz
                  </Link>
                </Typography>

                {!user?.email && (
                  <Typography
                    onClick={handleOpen2}
                    sx={{
                      ...headerStyle.menuItem,
                      color: "#333",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    Sign Up
                  </Typography>
                )}
                {!user?.email && (
                  <Typography
                    onClick={handleOpen}
                    sx={{ ...headerStyle.singIn, color: "#333" }}
                  >
                    Sign In
                  </Typography>
                )}
                {user?.email && (
                  <Typography
                    onClick={logOut}
                    sx={{ ...headerStyle.singIn, color: "#333" }}
                  >
                    Log Out
                  </Typography>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
