import React, { useEffect, useReducer, useState } from "react";
import _ from "lodash";
import Box from "@mui/material/Box";
import Answers from "./Answers";
import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz, setResults } from "../../redux/actions/quizAction";
const initialState = {
  loading: false,
  quiz: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((element) => {
        element.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answers":
      const questions = _.cloneDeep(state);
      questions[action.question_id].options[action.option_id].checked =
        action.value;
      return questions;

    default:
      return state;
  }
};

function Quizz() {
  const [quiz, dispatch1] = useReducer(reducer, initialState);
  const dispatch = useDispatch()
  const [isDisable, setDisable] = useState(false);
  const navigate = useNavigate();
 
  const [currentQ, setCurrentQ] = useState(0);
  const allQuiz= useSelector(state=>state.allQuiz)
  useEffect(() => {
      dispatch(fetchQuiz())
  }, [dispatch]);

  useEffect(() => {
    dispatch1({ type: "questions", value: allQuiz.quizs });
  }, [allQuiz.quizs]);

  const handleChange = (e, index) => {
    dispatch1({
      type: "answers",
      question_id: currentQ,
      option_id: index,
      value: e.target.checked,
    });
    setDisable(true);
  };
  const handleNext = () => {
    if (currentQ + 1 < allQuiz.quizs.length) {
      setCurrentQ((prev) => prev + 1);
    }
    setDisable(false);
  };
  const handlesumit = () => {
    navigate({
      pathname: `/results`,
      state: { quiz },
    });
  };

  useEffect(() => {
     dispatch(setResults(quiz))
  }, [dispatch, quiz]);
  // console.log(currentQ);
  return (
    <>
      {" "}
      <Typography
        sx={{
          fontSize: "30px",
          fontWeight: "bold",
          color: "primary",
          mb: "20px",
          pl: "20px",
          backgroundColor: "green",
        }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} to="/home">
          Home
        </Link>
      </Typography>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "690px",
          },
          m: "0 auto",
          p: "20px",
          boxShadow: "0px 0px 10px #000",
        }}
      >
        {allQuiz.loading && <Box>Loading...</Box>}
        {Array.isArray(quiz) && quiz.length && (
          <>
            <Box sx={{ mb: 5 }}>
              <Typography
                sx={{
                  mr: 2,
                  color: "green",
                }}
              >
                {" "}
                Question No:-
                {currentQ + 1}
              </Typography>
              <Typography sx={{ fontSize: "20px" }}>
                {quiz[currentQ].question}
              </Typography>
            </Box>
            <Answers
              isDisable={isDisable}
              options={quiz[currentQ].options}
              handleChange={handleChange}
            />
          </>
        )}
        {currentQ + 1 !== quiz.length ? (
          <Box sx={{ textAlign: "right", mt: 5, p: 2 }}>
            <Button
              sx={{
                background: "green",
                fontSize: "20px",
                p: "10px 20px",
                color: "white",
                "&:hover": { color: "#333" },
              }}
              onClick={handleNext}
            >
              Next
            </Button>
          </Box>
        ) : (
          <Box sx={{ textAlign: "right", mt: 5, p: 2 }}>
            <Button
              sx={{
                background: "green",
                fontSize: "20px",
                p: "10px 20px",
                color: "white",
                "&:hover": { color: "#333" },
              }}
              onClick={handlesumit}
            >
              Submit
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}

export default Quizz;
