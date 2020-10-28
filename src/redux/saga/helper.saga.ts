import ICardData from "../types/ICardData";

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
