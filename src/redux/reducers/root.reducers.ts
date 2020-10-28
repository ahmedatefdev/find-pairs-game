import { combineReducers } from "redux";
import IState from "../types/IState";
import CardReducer from "./Cards.reducer";
import GameReducer from "./Game.reducer";

const rootReducer = combineReducers<IState>({
  cards: CardReducer,
  game: GameReducer
});

export default rootReducer;
