import CardsData from "./cards";
import { getRandomInt } from "./utils";

const getCardFromArray = (number) => {
  return CardsData.find((card) => {
    return card.id === number;
  });
};

const getCardsRange = (start, end) => {
  return CardsData.slice(start, end + 1);
};

const getRandomCard = () => {
  const randomCardNumber = getRandomInt(1, 20);
  const randomCard = getCardFromArray(randomCardNumber);
  if (!randomCard) {
    console.log(randomCardNumber);
  }
  return randomCard;
};

export { getRandomCard, getCardsRange };
