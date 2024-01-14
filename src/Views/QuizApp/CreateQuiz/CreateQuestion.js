import Add from "../../QuizApp/QuizList/add.svg";
import Send from "./sendform.svg";
import Edit from "../../../media/edit.svg";
import Delete from "../../../media/delete.svg";
import { useState } from "react";
import Option from "./Option";
function CreateQuestion({
  question,
  onModifyQuestion,
  onEditQuestion,
  setIsBeingAdded,
  index,
  onDeleteQuestion,
}) {
  const [currQuestion, setCurrQuestion] = useState({ ...question });

  function handleSelectCorrectOption(optionIndex) {
    setCurrQuestion((state) => {
      return { ...state, correctOption: optionIndex };
    });
  }

  function handleModifyOption(option, index) {
    const newOptions = [...currQuestion.options];
    newOptions[index] = option;
    setCurrQuestion((state) => {
      return { ...state, options: newOptions };
    });
  }

  function handleDeleteOption(index) {
    const newOptions = [...currQuestion.options];
    newOptions.splice(index, 1);
    setCurrQuestion((state) => {
      return { ...state, options: newOptions, correctOption: undefined };
    });
  }

  return currQuestion.state === "creating" ? (
    <div
      className="question"
      style={{
        border: "2px solid #333",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{}}>Question</h2>
        <input
          type="text"
          style={{ height: "25px", width: "700px" }}
          value={currQuestion.question}
          onChange={(e) =>
            setCurrQuestion((state) => {
              return { ...state, question: e.target.value };
            })
          }
        />
        <input
          type="text"
          style={{ height: "25px", width: "70px" }}
          value={currQuestion.points}
          placeholder="nr of points"
          onChange={(e) =>
            setCurrQuestion((state) => {
              return { ...state, points: Number(e.target.value) };
            })
          }
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <ul style={{}}>
          {currQuestion.options.map((option, i) => (
            <Option
              option={option}
              correctOption={currQuestion.correctOption}
              onSelectCorrectOption={handleSelectCorrectOption}
              index={i}
              onChangeOption={handleModifyOption}
              onDeleteOption={handleDeleteOption}
            />
          ))}
        </ul>

        {currQuestion.options.length > 0 && (
          <button
            style={{ height: "50px", width: "50px" }}
            onClick={() => {
              if (
                currQuestion.question.replaceAll(" ", "") === "" ||
                !currQuestion.question
              )
                return;
              if (
                currQuestion.options.some(
                  (option) => option.replaceAll(" ", "") === "" || !option
                )
              )
                return;
              if (!(typeof currQuestion.points === "number")) return;
              if (
                !currQuestion.correctOption &&
                currQuestion.correctOption !== 0
              )
                return;
              setIsBeingAdded(false);
              onModifyQuestion({ ...currQuestion, state: "created" }, index);
            }}
          >
            <img src={Send} alt="send" style={{ width: "50px" }} />
          </button>
        )}
      </div>

      <button
        style={{ height: "50px", width: "50px" }}
        onClick={() => {
          if (
            currQuestion.options.some(
              (option) => option.replaceAll(" ", "") === "" || !option
            )
          )
            return;
          setCurrQuestion((state) => {
            return {
              ...state,
              options: [...state.options, ""],
            };
          });
        }}
      >
        <img src={Add} alt="add" style={{ width: "35px" }} />
      </button>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #333",
        borderRadius: "10px",
        padding: "10px",
        gap: "20px",
      }}
    >
      <div
        className="question"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>{currQuestion.question}</h2>
          <h3>{currQuestion.points} points</h3>
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
            {currQuestion.options.map((option) => (
              <li>{option}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{ height: "50px", width: "50px" }}
          onClick={() => onEditQuestion(index)}
        >
          <img src={Edit} alt="edit" style={{ width: "30px" }} />
        </button>
        <button
          style={{ height: "50px", width: "50px" }}
          onClick={() => onDeleteQuestion(index)}
        >
          <img src={Delete} alt="delete" style={{ width: "30px" }} />
        </button>
      </div>
    </div>
  );
}

export default CreateQuestion;
