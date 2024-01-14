import Edit from "../../../media/edit.svg";
import Delete from "../../../media/delete.svg";
function Q({
  quiz,
  onSelect,
  index,
  onDeleteQuiz,
  onFinishedEditing,
  onEditQuizClick,
}) {
  console.log(quiz.title);
  return (
    <li
      onClick={(e) => {
        onSelect(index);
      }}
      className="q"
      style={{
        color: "white",
        margin: "5px",
        backgroundColor: "#28282B",
        borderRadius: "25px",
      }}
    >
      <h2 style={{ margin: "5px", display: "inline-block" }}>{quiz.title}</h2>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{ height: "50px", width: "50px", margin: "10px" }}
          onClick={(event) => {
            event.stopPropagation();
            onDeleteQuiz(index);
          }}
        >
          <img src={Delete} alt="delete" style={{ width: "20px" }} />
        </button>
        <button
          style={{ height: "50px", width: "50px", margin: "10px" }}
          onClick={(event) => {
            event.stopPropagation();
            onEditQuizClick(index);
          }}
        >
          <img src={Edit} alt="edit" style={{ width: "20px" }} />
        </button>
      </div>
    </li>
  );
}

export default Q;
