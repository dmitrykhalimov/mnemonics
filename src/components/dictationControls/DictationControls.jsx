import React, { useState } from "react";
import "./dictationControls.scss";

const DictationControls = (props) => {
  const { changeDictationType } = props;
  const [selectorType, setSelectorType] = useState("numbers");

  const handleChangeType = (evt) => {
    setSelectorType(evt.target.id);
    changeDictationType(evt.target.id !== "numbers");
  };

  return (
    <div className="dictationContorls">
      <div className="dictationControls__conatiner">
        <div className="dictationControls__wrapper">
          <p className="dictationControls__title">Тип диканта</p>
          <div className="dictationControls__type">
            <input
              className="visually-hidden"
              type="radio"
              id="numbers"
              name="type"
              checked={selectorType === "numbers"}
              onChange={handleChangeType}
            />
            <label htmlFor="numbers">Цифры</label>
            <input
              className="visually-hidden"
              type="radio"
              id="pictures"
              name="type"
              checked={selectorType === "pictures"}
              onChange={handleChangeType}
            />
            <label htmlFor="pictures">Картинки</label>
          </div>
        </div>
        {/* <div className="dictationControls__wrapper">
          <p className="dictationControls__title">Тип диканта</p>
          <div className="dictationControls__type">
            <input
              className="visually-hidden"
              type="radio"
              id="numbers"
              name="type"
              checked
            />
            <label htmlFor="numbers">Цифры</label>
            <input
              className="visually-hidden"
              type="radio"
              id="pictures"
              name="type"
            />
            <label htmlFor="pictures">Картинки</label>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DictationControls;
