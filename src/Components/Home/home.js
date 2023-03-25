import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Quiz from "../Quizz";
import sideprofile from "./HomeImages/quiz.png"
import clock from "./HomeImages/clock.png"
import swords from "./HomeImages/swords.png"
import save from "./HomeImages/save.png"
import question from "./HomeImages/question.png"
import planning from "./HomeImages/planning.png"
import comment from "./HomeImages/comment.png"
import paper from "./HomeImages/paper.png"
export default function Home() {
  const [open, setOpen] = useState(false);
  const [takeQuiz, setTakeQuiz] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setTakeQuiz(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className="home">
      <Quiz
        handleClose={handleClose}
        handleOpen={handleOpen}
        setOpen={setOpen}
        open={open}
        takeQuiz={takeQuiz}
        setTakeQuiz={setTakeQuiz}
      />
      <header className="d-flex justify-content-between header">
        <h3>The Quiz App</h3>
        <Avatar alt="profile" src="/static/images/avatar/1.jpg" />
      </header>
      <div className="d-flex justify-content-between align-items-center b-head">
        <h1 className="b-head-title">
          Your Daily
          <span className="quiz-text"> Quiz</span>
          <span> Corner</span>
        </h1>
        <img
          className="img-fluid home-img"
          src={sideprofile}
          alt="side-profile"
        />
      </div>
      <div>
        <h2 className="title-quiz">
          Today's Quiz : <span className="topic">REACT</span>
        </h2>
        <div className="d-flex justify-content-between socials">
          <div className="mt-5">
            <div className="mb-2 socials-left">
              <img
                className="icons img-fluid"
                src={comment}
                alt="icons"
              />
              <span className="ms-2"> Leave a comment</span>
            </div>
            <div className="mb-2 socials-left">
              <img
                className="icons img-fluid"
                src={save}
                alt="icons"
              />
              <span className="ms-2">Save Quiz</span>
            </div>
            <div className="mb-2 socials-left">
              <img
                className="icons img-fluid"
                src={swords}
                alt="icons"
              />
              <span className="ms-2">Challenge a friend</span>
            </div>
          </div>
          <div>
            <AvatarGroup max={4} className="align-items-center">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
            <div className="mt-2 mb-2 socials-right">People Enrolled</div>
            <Rating name="size-small" defaultValue={5} size="small" readOnly />
            <div className="socials-right">3 Ratings (5.0)</div>
          </div>
        </div>
        <div className="about-quiz">
          This Microsoft Excel Proficiency Test is designed to evaluate an
          individual's knowledge and skills in using Microsoft Excel. It Covers
          a wide range of topics, including da...
          <span className="read-more">Read More</span>
        </div>
      </div>
      <div className="mt-3 pb-5">
        <h3 className="instructions">The Quiz includes</h3>
        <div className="inst-details mt-2">
          {" "}
          <img
            className="icons img-fluid"
            src={paper}
            alt="icons"
          />
          <span className="ms-2">50% Passing Percentage</span>
        </div>
        <div className="inst-details mt-2">
          {" "}
          <img
            className="icons img-fluid"
            src={question}
            alt="icons"
          />
          <span className="ms-2">5 Questions</span>
        </div>
        <div className="inst-details mt-2">
          {" "}
          <img
            className="icons img-fluid"
            src={clock}
            alt="icons"
          />
          <span className="ms-2">1 Minute</span>
        </div>
        <div className="inst-details mt-2">
          {" "}
          <img
            className="icons img-fluid"
            src={planning}
            alt="icons"
          />
          <span className="ms-2">1 Attempt Daily</span>
        </div>
      </div>
      <div className=" fixed-bottom mb-2">
        <Button onClick={handleOpen} variant="contained">
          Take Quiz
        </Button>
      </div>
    </div>
  );
}
