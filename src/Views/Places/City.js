import Star from "../../media/singleStar.svg";
import CityForm from "./CityForm";
import Edit from "../../media/edit.svg";
import Delete from "../../media/delete.svg";
export default function City({
  city,
  onDeleteCity,
  onModifyCity,
  setRatings,
  onSubmitNewCityModified,
  isFocused,
  onSetFocus,
  onLeaveModifyForm,
  setCurrLocation,
}) {
  const ratingsAvg =
    Object.values(city.ratings).reduce((acc, rating) => acc + rating, 0) / 5;

  return city.uiStateSet ? (
    <li
      style={{
        marginBottom: "10px",
        paddingLeft: "15px ",
        paddingBottom: "10px",
        color: "white",
        justifyItems: "center",
        gap: "15px",
      }}
      className={isFocused === city.location.id ? "active-city-overlay" : ""}
      onClick={() => {
        onSetFocus(city.location.id);
        setCurrLocation(city.location);
      }}
    >
      <div style={{ display: "flex", gap: "15px" }}>
        <h2>{city.location.label.split(",")[0]}</h2>
        <h2>{ratingsAvg}</h2>
        <img src={Star} alt="rating" />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => onModifyCity(city.location.id)}>
          <img src={Edit} alt="edit" />
        </button>
        <button
          onClick={() => {
            onDeleteCity(city.location.id);
          }}
        >
          <img src={Delete} alt="delete" />
        </button>
      </div>
    </li>
  ) : (
    <li
      style={{
        marginBottom: "10px",
        paddingLeft: "15px",
        paddingBottom: "10px",
        color: "white",
        justifyItems: "center",
        gap: "15px",
      }}
      className={isFocused === city.location.id ? "active-city-overlay" : ""}
      onClick={() => {
        onSetFocus(city.location.id);
        setCurrLocation(city.location);
      }}
    >
      <div style={{ display: "flex", gap: "15px" }}>
        <h2>{city.location.label.split(",")[0]}</h2>
        <h2>{ratingsAvg}</h2>
        <img src={Star} alt="rating" />
      </div>
      <CityForm
        formTitle={`Modify ${city.location.label.split(",")[0]} ratings`}
        onSubmit={onSubmitNewCityModified}
        setRatings={setRatings}
        onLeaveForm={onLeaveModifyForm}
      />
    </li>
  );
}
