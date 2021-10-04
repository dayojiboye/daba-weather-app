import React, { useEffect } from "react";
import { baseUrl } from "./utils/http";

// layout
import Layout from "./layouts";

function App() {
  useEffect(() => {
    let isSubscribed = true;

    const fetchWeather = async () => {
      try {
        let res = await fetch(`${baseUrl}api/location/${1398823}`);
        let data = await res.json();

        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

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
