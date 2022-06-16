import { Game } from "./GameContext";

export const initialGame: Game = {
  player: {
    name: "Player",
    resource: {
      builder: 10,
      brick: 10,
      soldier: 10,
      weapon: 10,
      magic: 10,
      crystal: 10,
      castle: 50,
      fence: 7,
    },
    isActive: true,
  },
  computer: {
    name: "Computer",
    resource: {
      builder: 10,
      brick: 10,
      soldier: 10,
      weapon: 10,
      magic: 10,
      crystal: 25,
      castle: 50,
      fence: 7,
    },
    isActive: false,
  },
};
