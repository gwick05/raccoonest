import Header from "./Header";
import Error from "./Error";
import Main from "./Main";
import Question from "./Question";
import { useReducer, useState } from "react";
import StartScreen from "./StartScreen";
import CompletedQuiz from "./CompletedQuiz";

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, status: "active" };
    case "reset":
      return { ...state, index: 0, status: "ready" };
    case "next":
      if (state.index === state.questions.length - 1) {
        console.log("finished");
        return { ...state, status: "completed" };
      } else {
        console.log("still going");
        return { ...state, index: state.index + 1 };
      }
    default:
      throw new Error("Action unknown");
  }
}

export default function Quiz({ selectedQuiz }) {
  const [{ questions, index, status, title }, dispatch] = useReducer(reducer, {
    status: "ready",
    index: 0,
    questions: selectedQuiz.questions,
    title: selectedQuiz.title,
  });
  const [score, setScore] = useState(0);

  console.log(selectedQuiz);
  const numQuestions = questions.length;

  return (
    <div className="quiz">
      <Header />

      <Main>
        {status === "ready" && (
          <StartScreen
            numQuestions={numQuestions}
            onStart={() => dispatch({ type: "start" })}
            title={title}
          />
        )}
        {status === "active" && (
          <Question
            question={questions[index]}
            questionNr={index}
            length={questions.length}
            onNext={() => dispatch({ type: "next" })}
            score={score}
            setScore={setScore}
          />
        )}
        {status === "completed" && (
          <CompletedQuiz
            score={score}
            maxScore={questions.reduce(
              (acc, question) => acc + question.points,
              0
            )}
            onReset={() => {
              setScore(0);
              dispatch({ type: "reset" });
            }}
          />
        )}
      </Main>
    </div>
  );
}
