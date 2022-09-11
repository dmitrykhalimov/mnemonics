import React, { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import DictationControls from "../../components/dictationControls/DictationControls";
import DictationField from "../../components/dictationField/DictationField";
import "./dictation.scss";

const DEFALUT_MIN = 0;
const DEFAULT_MAX = 19;

const Dictation = () => {
  const [isNumberFirst, setIsNumberFirst] = useState(true);
  const [minRange, setMinRange] = useState(DEFALUT_MIN);
  const [maxRange, setMaxRange] = useState(DEFAULT_MAX);

  const handleChangeMinRange = (min) => {
    setMinRange(Number(min));
  };

  const handleChangeMaxRange = (max) => {
    setMaxRange(Number(max));
  };

  const changeDictationType = (toggleValue) => {
    console.log(toggleValue === "numbers");
    setIsNumberFirst(toggleValue === "numbers");
    // хз чего оно не ререндерится
  };

  return (
    <>
      <Navigation activeCategory="dictation"></Navigation>
      <section className="dictation">
        <DictationControls
          onChangeMinRange={handleChangeMinRange}
          onChangeMaxRange={handleChangeMaxRange}
          minRange={minRange}
          maxRange={maxRange}
          changeDictationType={changeDictationType}
        />
        <DictationField
          minRange={minRange}
          maxRange={maxRange}
          isNumberFirst={isNumberFirst}
        />
      </section>
    </>
  );
};

export default Dictation;
