import React, { useEffect, useState } from "react";
import "./dictationField.scss";
import Card from "../card/Card";
import { getRandomCard } from "../../core/core";

const DictationField = (props) => {
  const { isNumberFirst } = props;
  const [currentCard, setCurrentCard] = useState(getRandomCard());

  const nextCard = () => {
    setCurrentCard(getRandomCard);
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
