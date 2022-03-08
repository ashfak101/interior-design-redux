import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

function CourseCuri({ singleCourse }) {
  console.log(singleCourse?.courseOutline);
  return (
    <Box sx={{ mt: 5 }}>
      <Container maxWidth="xl">
        <Paper variant="outlined" sx={{ p: 5 }}>
          {singleCourse?.courseOutline?.map((item, index) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "80%",
                m: "0 auto",
                borderBottom: "0.877651px solid rgba(0, 0, 0, 0.09)",
                p: 1,
              }}
              key={index}
            >
              <Typography sx={{ display: "flex" }}>
                <PlayCircleOutlineIcon sx={{ mr: 1 }} />
                Module {item?.mNo}: {item?.mName}{" "}
              </Typography>
              <Typography>01 :09 : 00 </Typography>
            </Box>
          ))}
        </Paper>
      </Container>
    </Box>
  );
}

export default CourseCuri;
