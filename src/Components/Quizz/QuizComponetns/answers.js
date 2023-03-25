export default function Answers({ questions }) {
  return (
    <div>
      <h1 className="answers-title">Answers</h1>
      {questions?.map((quiz, index) => {
        let filteredAnswer = quiz?.answers?.filter((item) => {
          return item?.isCorrect === true;
        });

        return (
          <ul className="answers" key={index}>
            <li>{quiz?.question}</li>
            {filteredAnswer?.map((opt, index) => (
              <div key={index}>{opt?.option}</div>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
