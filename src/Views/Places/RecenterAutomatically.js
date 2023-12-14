import { useMap } from "react-leaflet";
import { useEffect } from "react";
export default function RecenterAutomatically({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng]);
  return null;
}
