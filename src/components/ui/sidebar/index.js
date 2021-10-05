import React from "react";
import "./styles.scss";
import Header from "./header";
import Body from "./body";
import LocationSearch from "./search/locationSearch";
import { useAppContext } from "../../../context";

const Sidebar = () => {
  const { isSidebarOpen } = useAppContext();

  return (
    <div className="sidebar">
      <Header />
      <Body />

      {isSidebarOpen && <LocationSearch />}
    </div>
  );
};

export default Sidebar;
