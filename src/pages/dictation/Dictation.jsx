import React, { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import DictationControls from "../../components/dictationControls/DictationControls";
import DictationField from "../../components/dictationField/DictationField";
import "./dictation.scss";

const Dictation = () => {
  const [isNumberFirst, setIsNumberFirst] = useState(false);

  const changeDictationType = () => {
    setIsNumberFirst(!isNumberFirst);
    // хз чего оно не ререндерится
  };

  return (
    <>
      <Navigation></Navigation>
      <section className="dictation">
        <DictationControls changeDictationType={changeDictationType} />
        <DictationField isNumberFirst={isNumberFirst} />
      </section>
    </>
  );
};

export default Dictation;
