import trophy from "../QuizzImages/trophy.png"
import star from "../QuizzImages/star.png"
export function Results({ count }) {
  return (
    <div className="results">
      <div>
        <div className="mt-3">
          <img
            src={trophy}
            alt="trophy"
            className="img-fluid trophy"
          />
        </div>
        <div className="score">
          <img
            src={star}
            alt="star"
            className="img-fluid star"
          />{" "}
          <span className="score-point">{`${count * 2}0`} </span>
        </div>
        <div>
          <h1 className="results-title">Karma Points earned!</h1>
        </div>
      </div>
      <div>
        <h6 className="results-head">What are karma Points</h6>
        <p className="results-desc">
          Karma Points are awarded for various actions like attempting quizzes
          and watching videos, allowing you to move up the leaderboards and
          unlock new features
        </p>
      </div>
    </div>
  );
}
