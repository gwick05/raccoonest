import { useState } from "react";
import Add from "../QuizList/add.svg";
import CreateQuestion from "./CreateQuestion.js";

function AlreadyCreatedQuestionsView({
  questions,
  onAddNewQuestion,
  onModifyQuestion,
  onDeleteQuestion,
  onEditQuestion,
  adding = true,
}) {
  const [isBeingAdded, setIsBeingAdded] = useState(adding);

  return (
    <div>
      <h2>Questions</h2>
      {questions.map((question, i) => {
        return (
          <div className="question">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                alignItems: "center",
                margin: "20px",
              }}
            >
              <CreateQuestion
                onModifyQuestion={onModifyQuestion}
                onAddNewQuestion={onAddNewQuestion}
                question={question}
                index={i}
                key={Date.now()}
                setIsBeingAdded={setIsBeingAdded}
                onDeleteQuestion={onDeleteQuestion}
                onEditQuestion={onEditQuestion}
              />
            </div>
          </div>
        );
      })}
      {!isBeingAdded && (
        <button
          style={{
            flexDirection: "column",
            height: "50px",
            width: "50px",
            alignItems: "center",
          }}
          onClick={() => {
            setIsBeingAdded(true);
            onAddNewQuestion();
          }}
        >
          <img src={Add} alt="add" style={{ width: "35px" }} />
          <h3 style={{ width: "200px", margin: "0px " }}>Add new question</h3>
        </button>
      )}
    </div>
  );
}

export default AlreadyCreatedQuestionsView;
