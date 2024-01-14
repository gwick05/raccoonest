import Checked from "./checked.svg";
import Unchecked from "./unchecked.svg";
import Delete from "../../../media/delete.svg";
function Option({
  option,
  onChangeOption,
  index,
  onSelectCorrectOption,
  correctOption,
  onDeleteOption,
}) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "10px",
        gap: "15px",
      }}
    >
      <span style={{ margin: "5px" }}>Option</span>
      <input
        type="text"
        style={{ height: "25px", width: "300px" }}
        value={option}
        onChange={(e) => onChangeOption(e.target.value, index)}
      />
      <button
        style={{ height: "20px", width: "20px" }}
        onClick={() => onSelectCorrectOption(index)}
      >
        <img
          src={index === correctOption ? Checked : Unchecked}
          alt={index === correctOption ? "Checked" : "Unchecked"}
          style={{ width: "35px" }}
        />
      </button>
      <button
        style={{ height: "20px", width: "20px" }}
        onClick={() => onDeleteOption(index)}
      >
        <img src={Delete} alt="delete" style={{ width: "35px" }} />
      </button>
    </li>
  );
}

export default Option;
