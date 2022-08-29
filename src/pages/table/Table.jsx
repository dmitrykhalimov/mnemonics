import React from "react";
import Navigation from "../../components/navigation/Navigation";
import Pagintation from "../../components/pagination/Pagintation";
import "./table.scss";

import CardsData from "../../core/cards";
import Card from "../../components/card/Card";

const Table = () => {
  return (
    <>
      <Navigation></Navigation>
      <section className="table">
        <div className="table__container">
          <h1>Таблица карточек</h1>
          <Pagintation></Pagintation>
          <div className="table__field">
            {CardsData.map((cardData) => {
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
