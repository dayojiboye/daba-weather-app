import React from "react";
import "./styles.scss";
import Sidebar from "../components/ui/sidebar";
import Home from "../components/home";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />

      <main className="main">
        <Home />
      </main>
    </div>
  );
};

export default Layout;
