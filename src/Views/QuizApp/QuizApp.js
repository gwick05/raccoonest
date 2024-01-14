import QuizList from "../QuizApp/QuizList/QuizList";
import CreateQuiz from "./CreateQuiz/CreateQuiz";
import EditQuizView from "./CreateQuiz/EditQuizView";
import Quiz from "./Quiz/Quiz";
import { useReducer } from "react";

function QuizApp() {
  function reducer(state, action) {
    switch (action.type) {
      case "addNewQuiz":
        return {
          ...state,
          status: "browsing",
          quizes: [...state.quizes, action.payload],
        };
      case "createNewQuiz":
        return { ...state, status: "creating" };
      case "play":
        return {
          ...state,
          status: "playing",
          selectedQuiz: state.quizes[action.payload],
        };
      case "deleteQuiz":
        return { ...state, status: "browsing", quizes: action.payload };
      case "editQuiz":
        return {
          ...state,
          status: "editing",
          selectedQuiz: state.quizes[action.payload],
          selectedQuizIndex: action.payload,
        };
      case "finishedEditing":
        return {
          ...state,
          status: "browsing",
          quizes: [...action.payload],
        };
      default:
        throw new Error("Action unknown");
    }
  }

  const [{ quizes, status, selectedQuiz, selectedQuizIndex }, dispatch] =
    useReducer(reducer, {
      quizes: [],
      status: "browsing",
      selectedQuiz: null,
    });

  function handleCreateNewQuiz() {
    dispatch({ type: "createNewQuiz" });
  }
  function handleAddNewQuiz(quiz) {
    dispatch({ type: "addNewQuiz", payload: quiz });
  }
  function handleSelectQuiz(quiz) {
    dispatch({ type: "play", payload: quiz });
  }
  function handleDeleteQuiz(quizIndex) {
    const updatedQuizes = quizes.filter((_, index) => index !== quizIndex);
    dispatch({ type: "deleteQuiz", payload: updatedQuizes });
  }
  function handleEditQuizClick(quizIndex) {
    dispatch({ type: "editQuiz", payload: quizIndex });
  }
  function handleFinishedEditing(quizIndex, editedQuiz) {
    const updatedQuizes = quizes.map((quiz, index) =>
      index === quizIndex ? editedQuiz : quiz
    );
    dispatch({ type: "finishedEditing", payload: updatedQuizes });
  }

  return (
    <div>
      {status === "browsing" && (
        <QuizList
          onCreateNewQuiz={handleCreateNewQuiz}
          quizes={quizes}
          onSelectQuiz={handleSelectQuiz}
          onDeleteQuiz={handleDeleteQuiz}
          onEditQuizClick={handleEditQuizClick}
        />
      )}
      {status === "creating" && <CreateQuiz onAddNewQuiz={handleAddNewQuiz} />}
      {status === "playing" && <Quiz selectedQuiz={selectedQuiz} />}
      {status === "editing" && (
        <EditQuizView
          quiz={selectedQuiz}
          index={selectedQuizIndex}
          onFinishedEditing={handleFinishedEditing}
        />
      )}
    </div>
  );
}

export default QuizApp;
