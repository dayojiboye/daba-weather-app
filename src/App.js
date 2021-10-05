/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { baseUrl } from "./utils/http";
import { useAppContext } from "./context";

// layout
import Layout from "./layouts";

function App() {
  const {
    setMyLocation,
    myLocation,
    setWeatherData,
    setLoading,
    setUnit,
  } = useAppContext();

  useEffect(() => {
    let isSubscribed = true;

    const fetchWeather = async () => {
      setLoading(true);

      let cachedLocation;

      if (localStorage["weather-app-location"]) {
        cachedLocation = JSON.parse(localStorage["weather-app-location"]);
        setMyLocation(cachedLocation);
      } else {
        cachedLocation = myLocation;
      }

      try {
        let res = await fetch(`${baseUrl}api/location/${cachedLocation.woeid}`);
        let data = await res.json();

        console.log(data);
        setWeatherData(data.consolidated_weather);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (localStorage["weather-app-default-unit"]) {
      setUnit(localStorage["weather-app-default-unit"]);
    }

    if (isSubscribed) fetchWeather();

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;
