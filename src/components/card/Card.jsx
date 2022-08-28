import React, { useState } from "react";
import "./card.scss";

const Card = (props) => {
  const { number } = props;
  const [cardSide, setCardSide] = useState(false);

  const NumberSide = () => {
    return (
      <div className="card__inner card__inner--number">
        <span className="card__number">{number}</span>
      </div>
    );
  };

  const ImageSide = () => {
    return (
      <div className="card__inner card__inner--image">
        <img src="/assets/1.jpeg" alt="" />
        <span>Грейпрфут</span>
      </div>
    );
  };

  const toggleSide = () => {
    setCardSide(!cardSide);
    console.log(cardSide);
  };

  return (
    <div onClick={toggleSide} className="card">
      {cardSide ? <ImageSide /> : <NumberSide />}
    </div>
  );
};

export default Card;
