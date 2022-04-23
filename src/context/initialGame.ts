import { Game } from "./GameContext";

export const initialGame: Game = {
  player: { name: "Player", castleHitPoints: 50, fenceHitPoints: 15 },
  computer: { name: "Computer", castleHitPoints: 50, fenceHitPoints: 15 },
};
