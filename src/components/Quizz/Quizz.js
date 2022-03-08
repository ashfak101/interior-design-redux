import React, { useContext, useEffect, useReducer, useState } from "react";
import _ from "lodash";
import Box from "@mui/material/Box";
import Answers from "./Answers";
import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
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
  const [state, dispatch] = useContext(DataContext);
  const [isDisable, setDisable] = useState(false);
  // const { res, setRes } = useData();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [quizs, setQuizs] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch("/quizz.json")
      .then((res) => res.json())
      .then((data) => {
        setQuizs(data);
        setLoading(false);
      });
    setLoading(false);
  }, []);

  useEffect(() => {
    dispatch1({ type: "questions", value: quizs });
  }, [quizs, setQuizs]);

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
    if (currentQ + 1 < quizs.length) {
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
  // setRes(quiz);

  useEffect(() => {
    dispatch({ type: "quizResults", value: quiz });
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
        {loading && <Box>Loading...</Box>}
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
