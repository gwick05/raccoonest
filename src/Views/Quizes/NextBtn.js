import { useEffect, useRef } from "react";

export default function NextBtn({
  selectedOption,
  currIndex,
  correctAns,
  onSelect,
  option,
  isDisabled,
}) {
  const nextBtn = useRef(null);
  useEffect(function () {
    const element = nextBtn.current;
    element.addEventListener("click", onSelect);

    return () => {
      element.removeEventListener("click", onSelect);
    };
  }, []);

  return (
    <button
      className={
        currIndex === selectedOption - 1
          ? selectedOption - 1 === correctAns
            ? "answer-button correctAns"
            : "answer-button wrongAns"
          : "answer-button"
      }
      ref={nextBtn}
      disabled={isDisabled}
    >
      {option}
    </button>
  );
}
