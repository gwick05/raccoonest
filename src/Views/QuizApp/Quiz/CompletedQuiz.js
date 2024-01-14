export default function CompletedQuiz({ score, maxScore, onReset }) {
  const isHigherThanHalf = (score * maxScore) / 100 < 100 ? false : true;
  return (
    <div className="completed">
      <h1>COMPLETED QUIZ</h1>
      <h2>
        You scored a total of {score} points out of {maxScore}!
      </h2>
      <button style={{ fontSize: "20px" }} onClick={onReset}>
        Go back!
      </button>
    </div>
  );
}
