import Weekdays from "./weatherDays";
import Today from "./today";
import "./styles.scss";
import { useAppContext } from "../../context";

const Home = () => {
  const { weatherData, unit, setUnit } = useAppContext();

  const setUnitHandler = (type) => {
    setUnit(type);
    localStorage["weather-app-default-unit"] = type;
  };

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__units">
          <button
            onClick={() => setUnitHandler("C")}
            className={`home__units-btn ${
              unit === "C" ? "home__units-btn-active" : ""
            }`}
          >
            °C
          </button>

          <button
            onClick={() => setUnitHandler("F")}
            className={`home__units-btn ${
              unit === "F" ? "home__units-btn-active" : ""
            }`}
          >
            °F
          </button>
        </div>

        {weatherData.length > 0 && (
          <>
            <Weekdays />
            <Today />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
