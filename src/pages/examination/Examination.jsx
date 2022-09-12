import React from "react";
import "./examination.scss";

import { getCardsRange } from "../../core/core";
import CardMini from "../../components/cardMini/CardMini";

const Table = () => {
  const cards = getCardsRange(0, 100);

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
