import Header from "./Header";
import Error from "./Error";
import Main from "./Main";
import Question from "./Question";
import { useReducer, useState } from "react";
import StartScreen from "./StartScreen";
import CompletedQuiz from "./CompletedQuiz";

const initialState = {
  questions: [
    {
      question: "Let's start easy: Gabriel's favorite color: ",
      options: ["Red", "Blue", "Grey", "Magenta"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "Gabriel's favorite artist",
      options: ["Eminem", "50 Cent", "Kwengface", "Tzanca Uraganu'"],
      correctOption: 0,
      points: 10,
    },
    {
      question: "Let's get racist: Race Gabriel hates most",
      options: ["Italians", "French", "Swiss", "Gipsies"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "We had our first proper kiss in 2018. Which date",
      options: ["10 August", "16 August", "20 September", "22 August"],
      correctOption: 3,
      points: 10,
    },
    {
      question: "What's Gabriels favorite sport to watch?",
      options: ["Football", "Basketball", "Stone skipping", "None"],
      correctOption: 3,
      points: 10,
    },
    {
      question: "What does Gabriel love most about you?",
      options: ["Personality", "Soul", "Eyes", "Boobies 🤤"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "What was the name of the book he made you",
      options: [
        "Indescribable bond",
        "Unbelievable bond",
        "Indestructible bond",
        "Unmatchable bond",
      ],
      correctOption: 1,
      points: 30,
    },
    {
      question: "Gabriel's dreams in order",
      options: [
        "Get some experience as F.E. developer, build his own business, invest in real estate",
        "Get some experience as F.E. developer, build multiple mini businesses, invest in real estate",
        "Die working for Dr. Colasanti 💀",
        "Get some experience as F.E. developer, build his developing related business, marry you, invest together in real estate",
      ],
      correctOption: 3,
      points: 20,
    },
    {
      question: "Physical part of you Gabriel loves most",
      options: [
        "Feet",
        "Boobies 🤤",
        "Booty",
        "None, cause he doesn't give a shit about physical stuff",
        "Cake a.k.a your gorgeously lovely most beautiful in the world nose",
      ],
      correctOption: 4,
      points: 20,
    },
    {
      question:
        "You consider Gabriel as a long term relationship with eventual marriage worthy partner?",
      options: [
        "Who? This guys with 0 rizz? Nah, man, I'm good",
        "You must be taking the piss",
        "Meh, I've met better",
        "YES! You may now kiss!",
      ],
      correctOption: 3,
      points: 30,
    },
  ],
  //"ready", "active", "finished"
  status: "ready",
  index: 0,
};

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

export default function Quiz() {
  const [{ questions, index, status }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [score, setScore] = useState(0);

  const numQuestions = questions.length;

  return (
    <div className="quiz">
      <Header />

      <Main>
        {status === "ready" && (
          <StartScreen
            numQuestions={numQuestions}
            onStart={() => dispatch({ type: "start" })}
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
