import React, { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import Pagintation from "../../components/pagination/Pagintation";
import "./examination.scss";

import { getCardsRange } from "../../core/core";
import CardMini from "../../components/cardMini/CardMini";

const Table = () => {
  const [cards, setCards] = useState(getCardsRange(0, 99));

  const selectCardsRange = (minRange, maxRange) => {
    setCards(getCardsRange(minRange, maxRange));
  };

  return (
    <>
      <section className="examination">
        <div className="examination__container">
          <div className="examination__field">
            {cards.map((cardData) => {
              return (
                <CardMini
                  key={cardData.id}
                  number={cardData.id}
                  picture={cardData.picture}
                  description={cardData.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
