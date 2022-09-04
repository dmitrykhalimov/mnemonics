import React, { useState } from "react";
import "./cardMini.scss";

const CardMini = (props) => {
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
      <div className="cardMini__inner cardMini__inner--number">
        <span className="cardMini__number">{number}</span>
      </div>
    );
  };

  const ImageSide = () => {
    return (
      <div className="cardMini__inner cardMini__inner--image">
        <img src={`assets/${picture}`} alt={description} />
        <span className="cardMini__number">{number}</span>
        <span>{description}</span>
      </div>
    );
  };

  const toggleSide = () => {
    setCardSide(!cardSide);
    console.log(cardSide);
  };

  return (
    <div onClick={toggleSide} className={`cardMini`}>
      {cardSide ? <ImageSide /> : <NumberSide />}
    </div>
  );
};

export default CardMini;
