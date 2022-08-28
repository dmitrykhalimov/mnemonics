import React, { useEffect, useState } from "react";
import "./dictationField.scss";
import Card from "../card/Card";
import { getRandomCard } from "../../core/core";

const DictationField = () => {
  const [currentCard, setCurrentCard] = useState(getRandomCard());

  return (
    <div className="dictationField">
      <div className="dictationField__container">
        <Card
          key={currentCard.id}
          number={currentCard.id}
          picture={currentCard.picture}
          description={currentCard.description}
          isDictation={true}
        />
      </div>
    </div>
  );
};

export default DictationField;
