import { useState } from "react";

function CreatedQuestion({ question, index }) {
  const [isBeingModified, setIsBeingModified] = useState(false);
  return isBeingModified ? (
    ""
  ) : (
    <div className="question">
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>{question.question}</h2>
        <h3>{question.points} points</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <ul>
          {question.options.map((option) => (
            <li>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CreatedQuestion;
