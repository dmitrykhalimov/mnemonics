import React, { useEffect, useState } from "react";
import "./dictationField.scss";
import Card from "../card/Card";
import { getRandomCard } from "../../core/core";

const DEFALUT_MIN = 0;
const DEFAULT_MAX = 19;

const DictationField = (props) => {
  const { isNumberFirst, minRange, maxRange } = props;
  const [currentCard, setCurrentCard] = useState(
    getRandomCard(minRange, maxRange)
  );

  const nextCard = () => {
    setCurrentCard(getRandomCard(minRange, maxRange));
  };

  return (
    <div className="dictationField">
      <div className="dictationField__container">
        <Card
          key={currentCard.id}
          number={currentCard.id}
          picture={currentCard.picture}
          description={currentCard.description}
          isDictation={true}
          isNumberFirst={isNumberFirst}
        />
        <button onClick={nextCard} className="dictationField__button">
          Следующая карточка
        </button>
      </div>
    </div>
  );
};

export default DictationField;
