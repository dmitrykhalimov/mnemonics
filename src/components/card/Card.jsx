import React, { useState } from "react";
import "./card.scss";

const Card = (props) => {
  const {
    number,
    description,
    picture,
    isDictation = false,
    isNumberFirst = false,
  } = props;
  const [cardSide, setCardSide] = useState(isNumberFirst);

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
        <img src={`assets/${picture}`} alt={description} />
        <span className="card__number">{number}</span>
        <span>{description}</span>
      </div>
    );
  };

  const toggleSide = () => {
    setCardSide(!cardSide);
    console.log(cardSide);
  };

  return (
    <div
      onClick={toggleSide}
      className={`card${isDictation ? " card--dictation" : ""}`}
    >
      {cardSide ? <ImageSide /> : <NumberSide />}
    </div>
  );
};

export default Card;
