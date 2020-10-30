import { combineReducers } from "redux";
import IState from "../types/IState";
import CardReducer from "./cards.reducer";
import GameReducer from "./Game.reducer";
import ScoreReducer from "./score.reducer";

const rootReducer = combineReducers<IState>({
  cards: CardReducer,
  game: GameReducer,
  score: ScoreReducer
});

export default rootReducer;
