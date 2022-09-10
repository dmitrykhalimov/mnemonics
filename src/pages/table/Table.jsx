import React, { useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import Pagintation from "../../components/pagination/Pagintation";
import "./table.scss";

// import CardsData from "../../core/cards";
import { getCardsRange } from "../../core/core";
import Card from "../../components/card/Card";

const Table = () => {
  const [cards, setCards] = useState(getCardsRange(0, 19));

  const selectCardsRange = (minRange, maxRange) => {
    setCards(getCardsRange(minRange, maxRange));
  };

  return (
    <>
      <Navigation activeCategory="table"></Navigation>
      <section className="table">
        <div className="table__container">
          <Pagintation selectCardsRange={selectCardsRange}></Pagintation>
          <div className="table__field">
            {cards.map((cardData) => {
              return (
                <Card
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
