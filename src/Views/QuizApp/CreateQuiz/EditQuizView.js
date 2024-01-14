import { useReducer } from "react";
import AlreadyCreatedQuestionsView from "./AlreadyCreatedQuestionsView.js";

function EditQuizView({ quiz, onFinishedEditing, index }) {
  console.log(quiz, index);
  function reducer(state, action) {
    switch (action.type) {
      case "newEntry":
        return {
          ...state,
          status: "inProgress",
          questions: [
            ...state.questions,
            {
              question: "",
              options: [],
              correctOption: undefined,
              state: "creating",
            },
          ],
        };
      case "completed":
        return { ...state, status: "finished" };
      case "changeTitle":
        return { ...state, title: action.payload };
      case "changeQuestion":
        return { ...state, questions: action.payload };
      case "deleteQuestion":
        return { ...state, questions: action.payload };
      case "editQuestion":
        return { ...state, questions: action.payload };
      default:
        throw new Error("Action unknown");
    }
  }

  const [{ questions, status, title }, dispatch] = useReducer(reducer, {
    ...quiz,
    status: "inProgress",
  });

  function handleEditQuestion(index) {
    const newArr = [...questions];
    newArr[index].state = "creating";
    dispatch({ type: "editQuestion", payload: [...newArr] });
  }
  function handleAddNewQuestion() {
    dispatch({ type: "newEntry" });
  }
  function handleDeleteQuestion(index) {
    const newArr = [...questions];
    newArr.splice(index, 1);
    dispatch({ type: "deleteQuestion", payload: [...newArr] });
  }

  function handleModifyQuestion(question, index) {
    const newArr = [...questions];
    newArr[index] = question;
    dispatch({ type: "changeQuestion", payload: [...newArr] });
  }
  return (
    <div style={{ color: "white", margin: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1 style={{ color: "white" }}>Modify {quiz.title}!</h1>
        <button
          className="complete-quiz-button"
          onClick={() => {
            if (title.replaceAll(" ", "") === "" || !title) return;
            if (questions.length === 0) return;
            if (questions.some((question) => question.question === "")) return;

            onFinishedEditing(index, { title, questions });
          }}
        >
          Edited!
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "15px",
        }}
      >
        <h2>Quiz title</h2>
        <input
          type="text"
          style={{ height: "25px", width: "400px" }}
          value={title}
          onChange={(e) => {
            dispatch({ type: "changeTitle", payload: e.target.value });
          }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        {status === "inProgress" && (
          <AlreadyCreatedQuestionsView
            questions={questions}
            onAddNewQuestion={handleAddNewQuestion}
            onModifyQuestion={handleModifyQuestion}
            onDeleteQuestion={handleDeleteQuestion}
            onEditQuestion={handleEditQuestion}
            adding={false}
          />
        )}
      </div>
    </div>
  );
}

export default EditQuizView;
