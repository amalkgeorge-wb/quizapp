import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Results } from "./QuizComponetns/result";
import DashBoard from "./QuizComponetns/dashboard";
import Questions from "./QuizComponetns/questions";
import Answers from "./QuizComponetns/answers";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

const questions = [
  {
    question: "Which of the following command is used to create react-js-app ?",
    answers: [
      { option: "npx create-react-app appname", isCorrect: true },
      { option: "npm install create-react-app", isCorrect: false },
      { option: "npx install create-react-app -g", isCorrect: false },
      { option: "install - l create-react-app", isCorrect: false },
    ],
  },
  {
    question: "What is the default port number in which the application run ?",
    answers: [
      { option: "3000", isCorrect: true },
      { option: "8000", isCorrect: false },
      { option: "1250", isCorrect: false },
      { option: "3050", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is a way to handle data in React.js ?",
    answers: [
      { option: "State & Props", isCorrect: true },
      { option: "Services & Components", isCorrect: false },
      { option: "State & Services", isCorrect: false },
      { option: "State & Component", isCorrect: false },
    ],
  },
  {
    question:
      "In React.js, how we can pass the data from one component to another in React.js ?",
    answers: [
      { option: "SetState", isCorrect: false },
      { option: "Render with arguments", isCorrect: false },
      { option: "Props", isCorrect: true },
      { option: "PropTypes", isCorrect: false },
    ],
  },
  {
    question:
      "Which of the following is used to render components in web pages ?",
    answers: [
      { option: "DOM_render()", isCorrect: false },
      { option: "render()", isCorrect: true },
      { option: "ReactDOM_render()", isCorrect: false },
      { option: "transfer()", isCorrect: false },
    ],
  },
];
export default function Quiz(props) {
  const [seconds, setSeconds] = useState(60);
  const [buttonValue, setButtonValue] = useState(0);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState();
  const [time, setTime] = useState();

  useEffect(() => {
    if (props?.takeQuiz && seconds >= 0 && buttonValue < 6) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
      }, 60000);

      // Cleanup function
      return () => {
        clearInterval(interval);
      };
    }
  }, [props?.takeQuiz]);

  useEffect(() => {
    if (seconds === 0 && buttonValue < 5) {
      setButtonValue(5);
      if (buttonValue < 5) {
        setTime(59);
      }
    }
  }, [seconds]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor:
      buttonValue < 5
        ? "violet"
        : buttonValue === 7
        ? "#ff3399"
        : buttonValue === 6
        ? "#ccffff"
        : "green",
    maxHeight: "80vh",
    overflow: "auto",
    textAlign: "center",
    border: "2px #000",
    borderRadius: 5,
    p: 4,
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "3px",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };
  let buttonText;
  switch (buttonValue) {
    case 0:
    case 1:
    case 2:
    case 3:
      buttonText = "Next";
      break;
    case 4:
      buttonText = "Submit";
      break;
    case 5:
      buttonText = "Check Results";
      break;
    case 6:
      buttonText = "Check Answers";
      break;
    default:
      buttonText = "Home";
      break;
  }

  function handleButtonClick() {
    if (buttonText === "Home") {
      props?.handleClose();
      setButtonValue(0);
      setCount(0);
      setSeconds(60);
      props?.setTakeQuiz(false);
    } else if (buttonText === "Submit") {
      setTime(seconds);
      setButtonValue((buttonValue) => buttonValue + 1);
    } else {
      setButtonValue((buttonValue) => buttonValue + 1);
    }
  }
  function handleChange(option, isCorrect) {
    setValue(option);
    if (isCorrect) {
      setCount((count) => count + 1);
    }
  }
  console.log(time);
  return (
    <div>
      <Modal
        open={props?.open}
        onClose={props?.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        hideBackdrop
      >
        <Box sx={style}>
          {buttonValue < 6 && (
            <div>
              <div className="time">
                {seconds > 0
                  ? `Time remaining: ${seconds} seconds`
                  : "Time's up!"}
              </div>
            </div>
          )}

          {buttonValue < 5 && (
            <Questions
              buttonValue={buttonValue}
              handleChange={handleChange}
              value={value}
              questions={questions}
            />
          )}
          {buttonValue === 5 && <Results count={count} />}
          {buttonValue === 6 && <DashBoard count={count} time={time} />}
          {buttonValue === 7 && <Answers questions={questions} />}

          <Button
            onClick={() => handleButtonClick()}
            variant="contained"
            className="check-results"
          >
            {buttonText}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
