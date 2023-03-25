import { Avatar } from "@mui/material";
import star from "../QuizzImages/star.png"
import share from "../QuizzImages/share.png"
export default function DashBoard({ count, time }) {
  return (
    <div className="dashboard">
      <div className="dash-body">
        <h1 className="dash-head">
          Your Daily <span className="dash-quiz">Quiz</span> Corner
        </h1>

        <div className="dash-body-inner">
          <h6 className="you-score">You Scored:</h6>
          <div className="your-percentage">{`${count * 2}0%`}</div>
          <div>
            <h3 className="comment">Oh Snap, You can do betted!</h3>
            <div>
              <p>
                Success is not final, failure is not fatal; It is the courage to
                continue that counts
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div>
            <h3 className="dash-results">Your Score</h3>
            <div className="current-result">{count}/5</div>
            <div className="avg-result">Avg: 2 marks</div>
          </div>
          <div>
            <h3 className="dash-results">Time Taken</h3>
            <div className="current-result">0:{60 - time} sec</div>
            <div className="avg-result">Avg: 0:40 sec</div>
          </div>
        </div>
        <h2 className="seekho">seekho</h2>
        <h4 className="share">
          <img
            className="icons img-fluid"
            src={share}
            alt="icon"
          />
          <span className="ms-2">Share it with your friends!</span>
        </h4>
      </div>
      <div className="leaders">
        <div className="d-flex justify-content-around pt-2 mb-2">
          <div className="dash-results">Leaderboard</div>
          <div className="view-all">VIEW ALL</div>
        </div>
        <div className="d-flex justify-content-around align-items-center leader-list">
          <div className="number">1</div>
          <div className="d-flex align-items-center">
            <div>
              <Avatar />
            </div>
            <div>
              <h4 className="name">Ronita Sarkar</h4>
              <h5 className="follow">+FOLLOW</h5>
            </div>
          </div>
          <div className="points">
            <img
              src={star}
              alt="star"
              className="img-fluid star"
            />
            256
          </div>
        </div>
      </div>
    </div>
  );
}
