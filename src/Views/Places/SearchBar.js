import { useEffect } from "react";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useMap } from "react-leaflet";
export default function SearchBar({
  onSubmitCityMapSearch,
  setCurrLocation,
  onSetFocus,
  cities,
}) {
  const provider = new OpenStreetMapProvider();

  const searchControl = new GeoSearchControl({
    provider: provider,
    style: "bar",
    showMarker: false,
  });

  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  useEffect(() => {
    function handler(event) {
      const {
        location: {
          label,
          y,
          x,
          raw: { place_id },
        },
      } = event;

      const exists = cities.every((city) => city.location.id !== place_id);
      if (!exists) {
        setCurrLocation({ label, location: [y, x], id: place_id });
        onSetFocus(place_id);
      } else {
        onSubmitCityMapSearch();
        setCurrLocation({ label, location: [y, x], id: place_id });
        onSetFocus(place_id);
      }
    }
    map.on("geosearch/showlocation", handler);
    return () => map.off("geosearch/showlocation", handler);
  }, [cities, map, onSetFocus, onSubmitCityMapSearch, setCurrLocation]);
}
