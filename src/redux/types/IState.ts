import ICardsState from "./ICardsState";
import IGameState from "./IGameState";
import IScoreState from "./IScoreState";

export default interface IState {
  cards: ICardsState;
  game: IGameState;
  score:IScoreState
}
