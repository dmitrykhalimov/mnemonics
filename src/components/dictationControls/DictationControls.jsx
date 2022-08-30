import React, { useState } from "react";
import "./dictationControls.scss";

const DictationControls = (props) => {
  const {
    changeDictationType,
    minRange,
    maxRange,
    onChangeMinRange,
    onChangeMaxRange,
  } = props;

  const [selectorType, setSelectorType] = useState("numbers");

  const handleChangeType = (evt) => {
    setSelectorType(evt.target.id);
    changeDictationType(evt.target.id !== "numbers");
  };

  const handleChangeMinRange = (evt) => {
    onChangeMinRange(evt.target.value);
  };

  const handleChangeMaxRange = (evt) => {
    onChangeMaxRange(evt.target.value);
  };

  // const

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
        <div className="dictationControls__wrapper">
          <div className="dictationControls__range">
            <label htmlFor="minrange">Начало</label>
            <input
              type="number"
              name="minrange"
              id="minrange"
              onChange={handleChangeMinRange}
              value={minRange}
            />
            <label htmlFor="minrange">Конец</label>
            <input
              type="number"
              name="maxrange"
              id="maxrange"
              onChange={handleChangeMaxRange}
              value={maxRange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DictationControls;
