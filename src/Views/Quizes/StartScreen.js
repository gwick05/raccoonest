function StartScreen({ numQuestions, onStart }) {
  return (
    <div className="start">
      <h2>Welcome to the quiz</h2>
      <h3>{numQuestions} questions</h3>
      <button onClick={onStart}>Let's start</button>
    </div>
  );
}

export default StartScreen;
