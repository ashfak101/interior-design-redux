import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function QuizzCourse({ quizLevel }) {
  const [courses, setCourses] = useState([]);
  const [levelCourse, setLevelCourse] = useState([]);
  useEffect(() => {
    fetch("/course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  useEffect(() => {
    const coursesLevel = courses.filter((course) => course.level === quizLevel);

    setLevelCourse(coursesLevel);
  }, [courses, quizLevel]);
  // console.log(levelCourse);

  return (
    <Box>
      <Container maxWidth="xl">
        <Typography>Recommended Courses for You</Typography>

        <Box>
          <Grid container spacing={1} sx={{ marginBottom: "50px" }}>
            {levelCourse.map((course, index) => (
              <Grid
                key={index}
                item
                sx={{
                  padding: "20px",

                  textAlign: "center",
                }}
                xs={12}
                md={6}
                lg={4}
              >
                <Item
                  sx={{
                    background: "transparent",
                    border: "1px solid rgba(40, 40, 40, 0.24)",
                    boxShadow: "none",
                    p: "20px",
                  }}
                >
                  <Typography>{course.courseName}</Typography>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default QuizzCourse;
