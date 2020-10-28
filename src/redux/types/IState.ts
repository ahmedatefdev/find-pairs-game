import ICardsState from "./ICardsState";
import IGameState from "./IGameState";

export default interface IState {
  cards: ICardsState;
  game: IGameState;
}
