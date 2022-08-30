import React, { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import DictationControls from "../../components/dictationControls/DictationControls";
import DictationField from "../../components/dictationField/DictationField";
import "./dictation.scss";

const Dictation = () => {
  const [isNumberFirst, setIsNumberFirst] = useState(false);
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(19);

  const handleChangeMinRange = (min) => {
    setMinRange(Number(min));
  };

  const handleChangeMaxRange = (max) => {
    setMaxRange(Number(max));
  };

  const changeDictationType = () => {
    setIsNumberFirst(!isNumberFirst);
    // хз чего оно не ререндерится
  };

  return (
    <>
      <Navigation></Navigation>
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
