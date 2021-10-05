import { useAppContext } from "../../../../../context";
import "./styles.scss";
import { baseUrl } from "../../../../../utils/http";

import SearchBar from "../searchBar";
import Result from "../result";

const LocationSearch = () => {
  const {
    setSidebar,
    availableLocations,
    setAvailableLocations,
    setMyLocation,
    setWeatherData,
  } = useAppContext();

  const closeSidebar = () => {
    setSidebar(false);
    setAvailableLocations([]);
  };

  const setLocationAndGetWeather = async (location) => {
    setMyLocation(location);
    localStorage["weather-app-location"] = JSON.stringify(location);
    try {
      let req = await fetch(`${baseUrl}api/location/${location.woeid}`);
      let res = await req.json();
      setWeatherData(res.consolidated_weather);
      closeSidebar();
      setAvailableLocations([]);
      console.log(res.consolidated_weather)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="location_search">
      <div className="location_search__header">
        <span onClick={closeSidebar} className="material-icons">
          close
        </span>
      </div>

      <SearchBar />

      <div className="location_search__results">
        {availableLocations.map((location) => (
          <Result
            onClick={() => setLocationAndGetWeather(location)}
            title={location.title}
            key={location.woeid}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationSearch;
