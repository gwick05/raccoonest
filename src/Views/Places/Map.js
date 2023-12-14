import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import SearchBar from "./SearchBar";
import RecenterAutomatically from "./RecenterAutomatically";

export default function Map({
  onSubmitCityMapSearch,
  setCurrLocation,
  cities,
  onSetFocus,
  focus,
  currLocation,
}) {
  return (
    <div className="map">
      <MapContainer
        center={[40.6824408, 14.7680961]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <SearchBar
          onSubmitCityMapSearch={onSubmitCityMapSearch}
          setCurrLocation={setCurrLocation}
          onSetFocus={onSetFocus}
          cities={cities}
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => {
          return (
            <Marker
              position={city.location.location}
              eventHandlers={{
                click: () => {
                  setCurrLocation(city.location);
                  onSetFocus(city.location.id);
                },
              }}
              key={city.location.id}
            >
              <Popup>{city.location.label}</Popup>
            </Marker>
          );
        })}

        {currLocation && (
          <RecenterAutomatically
            lat={currLocation.location[0]}
            lng={currLocation.location[1]}
          />
        )}
      </MapContainer>
    </div>
  );
}
