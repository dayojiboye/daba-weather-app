import React from "react";
import "./styles.scss";

const ResultButton = ({ title, onClick }) => {
  const clickHandler = () => {
    onClick();
  };

  return (
    <div onClick={clickHandler} className="location_search__result_button">
      <span className="location_search__result_button__text">{title}</span>

      <span className="material-icons">chevron_right</span>
    </div>
  );
};

export default ResultButton;
