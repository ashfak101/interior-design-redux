import { Box, Button, Container, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import QuizzCourse from "./QuizzCourse";

function Results() {
  const [state] = useContext(DataContext);
  const [quizLevel, setQuizLevel] = useState("");
  let arr = [];
  let arr2 = [];
  let begineerCount = 0;
  let intermediateCount = 0;
  let advancedCount = 0;

  state.quizResults.forEach((element) => {
    element.options.forEach((option) => {
      if (element.right_answer === option.id && option.checked === true) {
        option.level = element.level;
        option.right = true;
        arr.push(option);
      }
    });
    arr2.push(element);
  });

  useEffect(() => {
    arr.forEach((element) => {
      if (element.level === "beginner") {
        begineerCount++;
      } else if (element.level === "intermediate") {
        intermediateCount++;
      } else if (element.level === "advanced") {
        advancedCount++;
      }
    });
    if (begineerCount > intermediateCount || begineerCount > advancedCount) {
      setQuizLevel("beginner");
    } else if (
      intermediateCount > begineerCount ||
      intermediateCount > advancedCount
    ) {
      setQuizLevel("intermediate");
    } else if (
      advancedCount > begineerCount ||
      advancedCount > intermediateCount
    ) {
      setQuizLevel("advanced");
    } else {
      setQuizLevel(" ");
    }
  }, [arr, begineerCount, advancedCount, intermediateCount]);

  // console.log(quizLevel);
  console.log(state);
  return (
    <div>
      <Box>
        <Typography
          variant="h4"
          sx={{ p: "10px 30px", background: "#bf00ff", color: "#fff" }}
        >
          Your Score is {arr.length}/{state.quizResults.length}
        </Typography>
        <Container maxWidth="xl">
          <Box sx={{ boxShadow: "0px 0px 10px #000", p: 4, mb: 4 }}>
            {arr2.map((element, index) => (
              <>
                {" "}
                <Box key={index} sx={{ borderBottom: "1px solid #999", pb: 1 }}>
                  <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                    Quiz {index + 1}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "20px", fontWeight: "400", m: "12px 0" }}
                  >
                    {element.question}
                  </Typography>

                  {element.options.map((option, index) => (
                    <Box key={index}>
                      <Typography
                        sx={{
                          color:
                            (option.right && option.checked && "green") ||
                            (option.checked && "red"),
                        }}
                      >
                        {option.option}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </>
            ))}
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Button variant="contained" sx={{ color: "white" }}>
              <Link
                to="/home"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                {" "}
                Back To Home
              </Link>{" "}
            </Button>
          </Box>
        </Container>
        <QuizzCourse quizLevel={quizLevel} />
      </Box>
    </div>
  );
}

export default Results;
