import { useEffect, useState } from "react";
import WeatherIcon from "../../../../utils/weatherIcons";
import { useAppContext } from "../../../../context";
import { formatDate } from "../../../../utils/formatDate";
import { convertUnit } from "../../../../utils/convertUnit";
import "./styles.scss";

const Body = () => {
  const { unit, weatherData, myLocation } = useAppContext();

  const now = +new Date();

  let today = formatDate(now);
  const [temp, setTemp] = useState(0);
  useEffect(() => {
    if (weatherData[0]) {
      if (unit === "F") {
        setTemp(convertUnit(weatherData[0].the_temp, unit));
      } else {
        setTemp(Math.round(weatherData[0].the_temp));
      }
    }
  }, [unit, weatherData]);

  return (
    <div className="sidebar__body">
      <div className="sidebar__body__weather_preview">
        <WeatherIcon
          code={weatherData[0] ? weatherData[0].weather_state_abbr : "cl"}
        />
      </div>

      <div className="sidebar__body__temperature">
        <span className="sidebar__body__temperature__degree">{temp}</span>
        <span className="sidebar__body__temperature__unit">°{unit}</span>
      </div>

      <div className="sidebar__body__weather_description">
        <span>
          {weatherData[0] ? weatherData[0].weather_state_name : "Clear"}
        </span>
      </div>

      <div className="sidebar__body__date">
        <span>Today</span>
        <span>·</span>
        <span>{today}</span>
      </div>

      <div className="sidebar__body__location">
        <span className="material-icons">location_on</span>
        <span>{myLocation.title}</span>
      </div>
    </div>
  );
};

export default Body;
