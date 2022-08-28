import React from "react";
import Navigation from "../../components/navigation/Navigation";
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
          <div className="table__controls"></div>
          <div className="table__field">
            {CardsData.map((cardData) => {
              return <Card key={cardData.id} number={cardData.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
