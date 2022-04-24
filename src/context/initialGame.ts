import { Game } from "./GameContext";

export const initialGame: Game = {
  player: {
    name: "Player",
    resource: {
      builders: 10,
      bricks: 10,
      soldiers: 10,
      weapons: 10,
      magic: 10,
      crystals: 10,
      castle: 50,
      fence: 15,
    },
  },
  computer: {
    name: "Computer",
    resource: {
      builders: 10,
      bricks: 10,
      soldiers: 10,
      weapons: 10,
      magic: 10,
      crystals: 10,
      castle: 50,
      fence: 15,
    },
  },
};
