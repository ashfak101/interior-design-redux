import { Box, Container, Grid } from "@mui/material";
import React, { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";

import bgImg from "../../../images/courses.png";
import { fetchCourses } from "../../../redux/actions/productAction";
import IntButton from "../../Utils/IntButton";
import Title from "../../Utils/Title";
import SharedGrid from "../SharedGrid/SharedGrid";
const bgImage = {
  background: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
function Courses() {
  // const [courses, setCourses] = useState([]);
  const courses = useSelector((state) => state.allCourse.courses); 

  console.log(courses);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCourses());
  },[dispatch]);
  

   

  // useEffect(() => {
  //   fetch("course.json")
  //     .then((res) => res.json())
  //     .then((data) => setCourses(data));
  // }, [setCourses]);
 
  return (
    <Box sx={bgImage}>
      <Box
        sx={{
          marginTop: {
            xs: "750px",
            md: "0",
            lg: "0",
          },
          pt: "100px",
        }}
      >
        <Title
          text1={" Our Popular Courses"}
          text2={
            " The basic philosophy of our studio is create individual, aesthetically stunning solutions for our studio is create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique"
          }
        ></Title>
      </Box>
      <Container
        maxWidth="xl"
        sx={{ marginTop: "60px", paddingBottom: "100px", textAlign: "center" }}
      >
        <Grid container spacing={1} sx={{ marginBottom: "50px" }}>
          {courses.slice(0, 3).map((data) => (
            <SharedGrid data={data} key={data.id}></SharedGrid>
          ))}
        </Grid>
        <IntButton text={"Search Now"}></IntButton>
      </Container>
    </Box>
  );
}

export default Courses;
