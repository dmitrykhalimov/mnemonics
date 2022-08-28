import React from "react";
import Navigation from "../../components/navigation/Navigation";
import DictationControls from "../../components/dictationControls/DictationControls";
import DictationField from "../../components/dictationField/DictationField";
import "./dictation.scss";

const Dictation = () => {
  return (
    <>
      <Navigation></Navigation>
      <section className="dictation">
        <DictationControls />
        <DictationField />
      </section>
    </>
  );
};

export default Dictation;
