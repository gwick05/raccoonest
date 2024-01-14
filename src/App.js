import Navigation from "./Views/Nav/Navigation.js";
import Title from "./Views/Nav/Title.js";
import Menu from "./Views/Nav/Menu.js";
import SideBar from "./Views/Places/SideBar";
import Map from "./Views/Places/Map";
import Container from "./Views/Places/Container";
import CityList from "./Views/Places/CityList";
import CityForm from "./Views/Places/CityForm";
import Blackboard from "./Views/Blackboard/Blackboard";
import { useState } from "react";
import QuizApp from "./Views/QuizApp/QuizApp.js";

function App() {
  const [currView, setCurrView] = useState("places");
  const [currLocation, setCurrLocation] = useState(null);
  const [isCityFormOpen, setIsCityFormOpen] = useState(false);
  const [focus, setFocus] = useState("");
  const [ratings, setRatings] = useState({
    sights: 0,
    affordability: 0,
    people: 0,
    eotas: 0,
    cuisine: 0,
  });
  const [cities, setCities] = useState([]);

  function resetRatings() {
    setRatings({
      sights: 0,
      affordability: 0,
      people: 0,
      eotas: 0,
      cuisine: 0,
    });
  }
  function handleSubmitCityMapSearch() {
    setIsCityFormOpen(true);
  }
  function handleDeleteCity(id) {
    setCities((cities) => cities.filter((city) => city.location.id !== id));
  }
  function handleOnLeaveModifyForm() {
    setCities((cities) =>
      cities.map((city) => {
        city.uiStateSet = true;
        return city;
      })
    );
  }
  function handleModifyCity(id) {
    if (cities.some((city) => !city.uiStateSet)) return;
    setCities((cities) =>
      cities.map((city) => {
        if (city.location.id === id) {
          city.uiStateSet = false;
          return city;
        } else return city;
      })
    );
  }

  function handleSubmitNewCityModified(e) {
    resetRatings();
    e.preventDefault();

    setCities((cities) =>
      cities.map((city) => {
        if (!city.uiStateSet) {
          city.ratings = ratings;
          city.uiStateSet = true;
          return city;
        } else return city;
      })
    );
  }

  function handleSubmitNewCityMapForm(e) {
    resetRatings();

    e.preventDefault();

    setCities((cities) => [
      ...cities,
      { location: currLocation, ratings: ratings, uiStateSet: true },
    ]);
    setIsCityFormOpen((open) => !open);
  }

  return (
    <>
      <Navigation>
        <Title />
        <Menu setCurrView={setCurrView} currView={currView} />
      </Navigation>

      {currView === "places" && (
        <Container>
          <SideBar>
            {isCityFormOpen && (
              <CityForm
                setRatings={setRatings}
                onSubmit={handleSubmitNewCityMapForm}
                formTitle={`Rate ${currLocation.label.split(",")[0]}`}
                formClass={"city-rating-form"}
              />
            )}
            <CityList
              cities={cities}
              onDeleteCity={handleDeleteCity}
              onModifyCity={handleModifyCity}
              onSubmitNewCityModified={handleSubmitNewCityModified}
              onLeaveModifyForm={handleOnLeaveModifyForm}
              setRatings={setRatings}
              isFocused={focus}
              onSetFocus={setFocus}
              setCurrLocation={setCurrLocation}
            />
          </SideBar>
          <Map
            onSubmitCityMapSearch={handleSubmitCityMapSearch}
            setCurrLocation={setCurrLocation}
            currLocation={currLocation}
            cities={cities}
            onSetFocus={setFocus}
            focus={focus}
          />
        </Container>
      )}

      {currView === "blackboard" && <Blackboard />}

      {currView === "quizes" && <QuizApp />}
    </>
  );
}

export default App;
