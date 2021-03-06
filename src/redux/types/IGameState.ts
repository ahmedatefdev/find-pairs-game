export default interface IGameState {
  gameLoading: boolean;
  showCards: boolean;
  gameError: any | null;
  winGame: boolean;
  pairsOptionValues: number[];
  theme: "light" | "dark";
}
