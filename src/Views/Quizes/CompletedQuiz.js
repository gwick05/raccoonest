export default function CompletedQuiz({ score, maxScore, onReset }) {
  const isHigherThanHalf = (score * maxScore) / 100 < 100 ? false : true;
  return (
    <div className="completed">
      <h1>COMPLETED QUIZ</h1>
      <h2>
        You scored a total of {score} points out of {maxScore}!{" "}
        {isHigherThanHalf
          ? "I love you, my love! You're amazing and know me better than anyone on this planet"
          : "Kinda trash bro, ngl! But still love you an infinite amount, my love!!!"}
      </h2>
      <button style={{ fontSize: "20px" }} onClick={onReset}>
        Go back!
      </button>
    </div>
  );
}
