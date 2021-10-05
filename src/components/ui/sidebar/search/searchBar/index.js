/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAppContext } from "../../../../../context";
import { baseUrl } from "../../../../../utils/http";

import "./styles.scss";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const { setAvailableLocations, setLoading } = useAppContext();

  const fetchResult = async () => {
    if (searchText === "") {
      return;
    }
    setLoading(true);
    try {
      let req = await fetch(
        `${baseUrl}api/location/search/?query=${searchText}`
      );
      let res = await req.json();
      setAvailableLocations(res);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchResult();
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchText]);

  return (
    <div className="location_search__search_bar">
      <div className="location_search__search_bar__search_box">
        <label className="material-icons" htmlFor="search">
          search
        </label>
        <input
          onInput={(e) => setSearchText(e.target.value.trim())}
          type="text"
          placeholder="Search Location"
          id="search"
        />
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
