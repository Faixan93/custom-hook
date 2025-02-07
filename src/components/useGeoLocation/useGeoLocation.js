import { useState, useEffect } from "react";

function useGeoLocation() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    accuracy: null,
    error: null,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        error: "Geolocation is not supported by your browser",
      }));
      return;
    }

    const success = (position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
        error: null,
      });
    };

    const error = (err) => {
      setLocation((prev) => ({ ...prev, error: err.message }));
    };

    const watcher = navigator.geolocation.watchPosition(success, error);

    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return location;
}

export default useGeoLocation;
