import ICardData from "../types/ICardData";
const images = require.context("../../../public/images", false, /.jpg/);
export const paths = images.keys();

export function GetCardsData(
  cardsCount: number,
  tempPaths: string[],
  orders: number[],
  RandomCardsData: ICardData[]
) {
  for (let i = 0; i < cardsCount; i++) {
    const currentPath = tempPaths
      .splice(Math.random() * tempPaths.length, 1)
      .pop();
    for (let y = 0; y < 2; y++) {
      const RandomOrder = orders.splice(Math.random() * orders.length, 1).pop();
      RandomCardsData.push({
        imgURL: currentPath,
        order: RandomOrder,
        hidden: false,
        selected: false
      });
    }
  }
}

export function GenerateRandomCardsData(pairsCount: number) {
  let tempPaths = [...paths];
  const orders = Array.from(Array(pairsCount * 2).keys());
  const RandomCardsData: ICardData[] = [];
  GetCardsData(pairsCount, tempPaths, orders, RandomCardsData);
  return RandomCardsData;
}
