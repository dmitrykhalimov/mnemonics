import CardsData from "./cards";
import { getRandomInt } from "./utils";

const getCardFromArray = (number) => {
  return CardsData.find((card) => {
    return card.id === number;
  });
};

const getRandomCard = () => {
  const randomCardNumber = getRandomInt(1, 20);
  return getCardFromArray(randomCardNumber);
};

export { getRandomCard };
