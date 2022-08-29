import React from "react";
import "./pagination.scss";

const Pagintation = () => {
  return (
    <div className="pagination">
      <button className="pagination__button">0 - 19</button>
      <button className="pagination__button">20 - 39</button>
      <button className="pagination__button">40 - 59</button>
      <button className="pagination__button">60 - 79</button>
      <button className="pagination__button">80 - 99</button>
    </div>
  );
};

export default Pagintation;
