import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import { styled } from "@mui/material/styles";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function BlogSearch({ blogs }) {
  return (
    <Box sx={{ mt: 10 }}>
      <Container maxWidth="xl">
        <Box></Box>
        <Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {blogs.map((blog, index) => (
              <Grid item xs={12} sm={12} md={4} key={index}>
                <Item sx={{ textAlign: "left" }}>
                  <Box sx={{ textAlign: "center" }}>
                    {" "}
                    <img src={blog.img} alt="" />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "29.86px",
                      fontWeight: "700",
                      color: "#333333",
                      textAlign: "left",
                    }}
                  >
                    {blog.name}
                  </Typography>
                  <Typography sx={{ display: "flex", mt: 2, mb: 3 }}>
                    <CalendarTodayIcon /> {blog.date}
                  </Typography>
                  <Link
                    style={{ textDecoration: "none", color: "#F15A29" }}
                    to={`/blogs/${blog.id}`}
                  >
                    Read more
                  </Link>
                </Item>
              </Grid>
            ))}{" "}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default BlogSearch;
