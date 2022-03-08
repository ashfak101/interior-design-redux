import { Alert, Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, } from "react";
import { useParams } from "react-router-dom";

import img from "../../images/singleCourse.png";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import StarIcon from "@mui/icons-material/Star";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PersonIcon from "@mui/icons-material/Person";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import CourseOverView from "./CourseOverView";
import CourseCuri from "./CourseCuri";
import { useDispatch, useSelector } from "react-redux";
import { selectedCourse } from "../../redux/actions/productAction";
const styles = {
  cardItems: {
    display: "flex",
    justifyContent: "space-between",
    pb: 2,
    pt: 2,
    borderBottom: " 0.877651px solid rgba(0, 0, 0, 0.09)",
  },
};
function CourseDetails({ handleAddToCart, isTrue }) {
  const { id } = useParams();
  // from redux
  const singleCourse = useSelector((state) => state.allCourse.singleCourse); 
  const dispatch = useDispatch()
  useEffect(() => {
    
    // setting course Data to redux
    dispatch(selectedCourse(id));
  }, [id,dispatch]);

  return (
    <Box sx={{ marginTop: "-600px", background: "transparent" }}>
      <Container
        maxWidth="xl"
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          background: "#FFFFFF",
          pt: 2,
        }}
      >
        <Grid container spacing={1}>
          <Grid xs={12} md={8} xl={8}>
            <img style={{ width: "100%" }} src={img} alt="" />
          </Grid>
          <Grid xs={12} md={4} xl={4} sx={{ p: 5 }}>
            <Typography
              sx={{ fontWeight: "700", fontSize: "21.06px", mb: "36px" }}
            >
              Course Details
            </Typography>
            <Box sx={{ ...styles.cardItems }}>
              <Typography sx={{ display: "flex" }}>
                {" "}
                <LocalAtmIcon />
                Price
              </Typography>
              <Typography>{singleCourse?.price}</Typography>
            </Box>
            <Box sx={{ ...styles.cardItems }}>
              <Typography sx={{ display: "flex" }}>
                {" "}
                <AllInboxIcon />
                Level
              </Typography>
              <Typography>{singleCourse?.level}</Typography>
            </Box>
            <Box sx={{ ...styles.cardItems }}>
              <Typography sx={{ display: "flex" }}>
                {" "}
                <StarIcon />
                Rating
              </Typography>
              <Typography>{singleCourse?.rating}</Typography>
            </Box>
            <Box sx={{ ...styles.cardItems }}>
              <Typography sx={{ display: "flex" }}>
                {" "}
                <PlayCircleIcon />
                Duration
              </Typography>
              <Typography>{singleCourse?.duration}</Typography>
            </Box>
            <Box sx={{ ...styles.cardItems }}>
              <Typography sx={{ display: "flex" }}>
                {" "}
                <PersonIcon />
                Students
              </Typography>
              <Typography>{singleCourse?.price}</Typography>
            </Box>
            <Box sx={{ ...styles.cardItems }}>
              <Typography sx={{ display: "flex" }}>
                {" "}
                <SubtitlesIcon />
                Languages
              </Typography>
              <Typography>English</Typography>
            </Box>
            <Box sx={{ ...styles.cardItems }}>
              <Typography sx={{ display: "flex" }}>
                {" "}
                <ShareIcon />
                Share
              </Typography>
              <Typography>
                <FacebookIcon />
                <TwitterIcon />
                <LinkedInIcon />
              </Typography>
            </Box>
            <Button
              sx={{
                width: "100%",
                mt: "20px",
                backgroundColor: "#282828",
                color: "#FFFFFF",
                "&:hover": { color: "#282828" },
              }}
              onClick={() => handleAddToCart(singleCourse)}
            >
              Enroll Now
            </Button>

            {isTrue && <Alert>Item added to Cart</Alert>}
          </Grid>
        </Grid>
      </Container>
      <CourseOverView des={singleCourse?.description} />
      <CourseCuri singleCourse={singleCourse} />
    </Box>
  );
}

export default CourseDetails;
