import React from "react";
import useGeoLocation from "./useGeoLocation";

const GeoLocation = () => {
  const { latitude, longitude, accuracy, error } = useGeoLocation();
  return (
    <div>
      <h1>User Geolocation</h1>
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <>
          <p>Latitude: {latitude || "Fetching..."}</p>
          <p>Longitude: {longitude || "Fetching..."}</p>
          <p>Accuracy: {accuracy ? `${accuracy} meters` : "Fetching..."}</p>
        </>
      )}
    </div>
  );
};

export default GeoLocation;
