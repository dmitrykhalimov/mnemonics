import React from "react";
import "./pagination.scss";

const Pagintation = (props) => {
  const { selectCardsRange } = props;

  const handleButtonClick = (evt) => {
    selectCardsRange(
      Number(evt.target.dataset.min),
      Number(evt.target.dataset.max)
    );
  };
  return (
    <div className="pagination">
      <button
        onClick={handleButtonClick}
        data-min="0"
        data-max="19"
        className="pagination__button"
      >
        0 - 19
      </button>
      <button
        onClick={handleButtonClick}
        data-min="20"
        data-max="39"
        className="pagination__button"
      >
        20 - 39
      </button>
      <button
        onClick={handleButtonClick}
        data-min="40"
        data-max="59"
        className="pagination__button"
      >
        40 - 59
      </button>
      <button
        onClick={handleButtonClick}
        data-min="60"
        data-max="79"
        className="pagination__button"
      >
        60 - 79
      </button>
      <button
        onClick={handleButtonClick}
        data-min="80"
        data-max="99"
        className="pagination__button"
      >
        80 - 99
      </button>
    </div>
  );
};

export default Pagintation;
