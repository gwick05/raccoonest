import City from "./City";
export default function CityList({
  cities,
  onDeleteCity,
  onModifyCity,
  onSubmitNewCityModified,
  setRatings,
  isFocused,
  onSetFocus,
  onLeaveModifyForm,
  setCurrLocation,
}) {
  return (
    <ul>
      {[...cities].reverse().map((city) => (
        <City
          key={city.location.id}
          isFocused={isFocused}
          city={city}
          setRatings={setRatings}
          onDeleteCity={onDeleteCity}
          onModifyCity={onModifyCity}
          onSubmitNewCityModified={onSubmitNewCityModified}
          onSetFocus={onSetFocus}
          onLeaveModifyForm={onLeaveModifyForm}
          setCurrLocation={setCurrLocation}
        />
      ))}
    </ul>
  );
}
