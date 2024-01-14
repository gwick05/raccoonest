import addIcon from "./add.svg";
import Q from "./Q";

function QuizList({
  onCreateNewQuiz,
  quizes,
  onSelectQuiz,
  onDeleteQuiz,
  onEditQuiz,
  onEditQuizClick,
}) {
  console.log(quizes);
  return (
    <div className="quiz-list">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px",
          alignItems: "center",
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: "white",
          backgroundColor: "#28282B",
          borderRadius: "25px",
        }}
      >
        <h1 style={{ color: "white", margin: "25px" }}>All your quizes</h1>
        <button
          className="menu-item"
          style={{ marginRight: "70px", height: "50px", width: "50px" }}
          onClick={onCreateNewQuiz}
        >
          <img src={addIcon} alt="add" />
        </button>
      </div>
      <ul
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          margin: "20px",
        }}
      >
        {quizes.map((quiz, index) => (
          <Q
            quiz={quiz}
            onSelect={onSelectQuiz}
            index={index}
            onDeleteQuiz={onDeleteQuiz}
            onEditQuiz={onEditQuiz}
            onEditQuizClick={onEditQuizClick}
          />
        ))}
      </ul>
    </div>
  );
}

export default QuizList;
