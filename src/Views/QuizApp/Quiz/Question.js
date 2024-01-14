import { useState } from "react";
import NextBtn from "./NextBtn";
function Question({ question, onNext, questionNr, length, score, setScore }) {
  const [selectedOption, setSelctedOption] = useState(null);
  const correctAns = question.correctOption;

  function isCorrectAnswerHandler() {
    selectedOption - 1 === correctAns &&
      setScore((score) => score + question.points);
  }
  return (
    <div className="question-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          style={{ textAlign: "center", marginLeft: "20px", fontSize: "20px" }}
        >
          Question {questionNr + 1} out of {length}
        </p>
        <p style={{ marginLeft: "auto" }}>Your score: {score}</p>
      </div>
      <h2 className="question ">{question.question}</h2>
      <div className="answers">
        <div className="timer-container">
          <div className="timer">10:00</div>
        </div>
        <div className="options">
          {question.options.map((option, i) => (
            <NextBtn
              selectedOption={selectedOption}
              currIndex={i}
              correctAns={correctAns}
              onSelect={() => {
                setSelctedOption(i + 1);
                /* option === correctAns &&
                  setScore((score) => score + question.points);
                  */
              }}
              option={option}
              isDisabled={selectedOption ? true : false}
            />
          ))}
        </div>
        {selectedOption && (
          <button
            className="next-button"
            onClick={() => {
              setSelctedOption(null);
              onNext();
              isCorrectAnswerHandler();
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Question;
