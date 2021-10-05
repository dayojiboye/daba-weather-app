import React, { useState } from "react";
import "./styles.scss";
import Spinner from "../../../spinner";

const ResultButton = ({ title, onClick }) => {
  const [loading, setLoading] = useState(false);

  const clickHandler = () => {
    setLoading(true);
    onClick();
  };

  return (
    <div onClick={clickHandler} className="location_search__result_button">
      <span className="location_search__result_button__text">{title}</span>

      {loading ? (
        <Spinner />
      ) : (
        <span className="material-icons">chevron_right</span>
      )}
    </div>
  );
};

export default ResultButton;
