import React from "react";
import "./styles.scss";
import Sidebar from "../components/ui/sidebar";
import Home from "../components/home";
import { useAppContext } from "../context";
import Spinner from "../components/ui/spinner";

const Layout = () => {
  const { isLoading } = useAppContext();

  return (
    <div className="layout">
      {isLoading && (
        <Spinner
          style={{
            position: "fixed",
            top: "10px",
            left: "10px",
            color: "#fff",
            zIndex: "1000",
          }}
        />
      )}

      <Sidebar />

      <main className="main">
        <Home />
      </main>
    </div>
  );
};

export default Layout;
