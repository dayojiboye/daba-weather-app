import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const Context = ({ children }) => {
  const [isSidebarOpen, setSidebar] = useState(false);

  const [unit, setUnit] = useState("C");

  // default location
  const [myLocation, setMyLocation] = useState({
    title: "Lagos",
    location_type: "City",
    woeid: 1398823,
    latt_long: "6.439180,3.423480",
  });

  const [availableLocations, setAvailableLocations] = useState([]);

  const [weatherData, setWeatherData] = useState([]);

  const [isLoading, setLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        unit,
        setUnit,
        availableLocations,
        setAvailableLocations,
        myLocation,
        setMyLocation,
        weatherData,
        setWeatherData,
        isSidebarOpen,
        setSidebar,
        isLoading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
