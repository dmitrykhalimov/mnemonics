import React, { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import DictationControls from "../../components/dictationControls/DictationControls";
import DictationField from "../../components/dictationField/DictationField";
import "./dictation.scss";

const Dictation = () => {
  const [isNumberFirst, setIsNumberFirst] = useState(false);

  const changeDictationType = () => {
    setIsNumberFirst(!isNumberFirst);
    console.log("А где ререндер?");
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
