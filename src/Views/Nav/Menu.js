import Star from "../../media/star.svg";
export default function Menu({ setCurrView, currView }) {
  return (
    <div className="menu">
      <button className="menu-item" onClick={() => setCurrView("quizes")}>
        <img
          className={currView === "quizes" ? "menu-star-selected" : "menu-star"}
          src={Star}
          alt="star"
        />
        <span>Quizes</span>
      </button>

      <button className="menu-item" onClick={() => setCurrView("places")}>
        <img
          className={currView === "places" ? "menu-star-selected" : "menu-star"}
          src={Star}
          alt="star"
        />
        <span>Places</span>
      </button>

      <button className="menu-item" onClick={() => setCurrView("blackboard")}>
        <img
          className={
            currView === "blackboard" ? "menu-star-selected" : "menu-star"
          }
          src={Star}
          alt="star"
        />
        <span>Blackboard</span>
      </button>
    </div>
  );
}
