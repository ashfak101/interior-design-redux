import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../../Utils/Title";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 560,
  // bgcolor: "background.paper",
  // background: "rgba(0, 0, 0, 0.1)",
  border: "none",
};
const styles = {
  media: {
    position: "absolute",
    bottom: "50px",
    "&:before": {
      content: '""',
      position: "absolute",
      bottom: "24px",
      left: {
        xs: "110px",
        md: "191px",
        lg: "191px",
      },
      width: {
        xs: "158px",
        md: "240px",
        lg: "240px",
      },
      border: "0.566px solid #FFFFFF",

      background: "#fff",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: {
        xs: "90px",
        md: "100px",
        lg: "100px",
      },
      left: { xs: "70px", md: "121px", lg: "121px" },
      height: {
        xs: "138px",
        md: "240px",
        lg: "240px",
      },
      border: "0.566px solid #FFFFFF",

      background: "#fff",
    },
  },
};

function VideoSection() {
  const [videos, setVideos] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("video.json")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);
  return (
    <Box>
      <Box
        sx={{
          m: {
            xs: "50px",
            md: "84px",
            lg: "84px",
          },
        }}
      >
        <Title
          text1={"Lorem Simply Dummy Text of the Printing Ipsum"}
          text2={
            "The basic philosophy of our studio is create individual, aesthetically stunning solutions for our customers by lightning-fast development of projects employing unique.stomers by lightning-fast development "
          }
        />
      </Box>
      <Box>
        <Grid container sx={{ background: "#333" }}>
          {videos.map((video, index) => (
            <Grid
              item
              xs={12}
              md={4}
              lg={4}
              key={index}
              sx={{ position: "relative" }}
            >
              <img style={{ width: "100%" }} src={video.image} alt="" />
              <Box
                sx={{
                  ...styles.media,
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "relative",

                    cursor: "pointer",

                    "&:before": {
                      content: '""',
                      position: "absolute",
                      top: "-13px",
                      left: "-12px",
                      width: "68px",
                      height: "68px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  <PlayArrowIcon
                    onClick={() => {
                      handleOpen(video.url);
                    }}
                    sx={{
                      fontSize: "30px",
                      color: "#FFFFFF",
                      background: "rgba(255, 255, 255, 0.3)",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      position: "relative",
                      "&:hover": {
                        color: "black",
                      },
                    }}
                  />
                </Box>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  sx={{ backgroundColor: "rgb(0 0 0 / 16%)", border: "none" }}
                >
                  <Box sx={style}>
                    <iframe
                      width="560"
                      height="415"
                      src={video.url}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullscreen
                    ></iframe>
                  </Box>
                </Modal>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: "700",
                    fontSize: "59px",
                    color: "#FFFFFF",
                    WebkitTextStrokeWidth: "2px ",
                    textFillColor: "transparent",
                  }}
                >
                  0{index + 1}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default VideoSection;
