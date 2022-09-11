import React, { useState } from "react";
import "./card.scss";

const Card = (props) => {
  const {
    number,
    description,
    picture,
    isDictation = false,
    isNumberFirst = true,
  } = props;
  const [isCardClosed, setCardClosed] = useState(true);

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

  const ImageReverseSide = () => {
    return (
      <div className="card__inner card__inner--image">
        <img src={`assets/${picture}`} alt={description} />
      </div>
    );
  };

  const toggleSide = () => {
    setCardClosed(!isCardClosed);
  };

  const showCard = () => {
    console.log(
      "is number first",
      isNumberFirst,
      "is card closed",
      isCardClosed
    );
    if (!isDictation) {
      return isCardClosed ? <NumberSide /> : <ImageSide />;
    }

    if (isNumberFirst) {
      return isCardClosed ? <NumberSide /> : <ImageSide />;
    }

    return isCardClosed ? <ImageReverseSide /> : <ImageSide />;
  };

  return (
    <div
      onClick={toggleSide}
      className={`card${isDictation ? " card--dictation" : ""}`}
    >
      {showCard()}
    </div>
  );
};

export default Card;
