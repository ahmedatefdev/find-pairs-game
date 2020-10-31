import { combineReducers } from "redux";
import IState from "../types/IState";
import CardReducer from "./Cards";
import GameReducer from "./Game";
import ScoreReducer from "./Score";

const rootReducer = combineReducers<IState>({
  cards: CardReducer,
  game: GameReducer,
  score: ScoreReducer
});

export default rootReducer;
