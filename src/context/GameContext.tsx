import { createContext, useContext, useState } from "react";
import { getAddBetweenBounds } from "../utils/gameUtils";
import { initialGame } from "./initialGame";

type GameContextType = {
  game: Game;
  updatePlayerName: (player: keyof Game, newName: string) => void;
  affectPlayerResource: (
    player: keyof Game,
    affected: keyof Resource,
    amount: number
  ) => void;
  affectBuilding: (
    player: keyof Game,
    building: "castle" | "fence",
    amount: number
  ) => void;
  togglePlayerTurn: () => void;
  getActivePlayer: () => keyof Game;
};

type GameContextProviderProps = {
  children: React.ReactNode;
};

export type Game = {
  player: Player;
  computer: Player;
};

export type Player = {
  name: string;
  resource: Resource;
  isActive: boolean;
};

export type Resource = {
  builders: number;
  bricks: number;
  soldiers: number;
  weapons: number;
  magic: number;
  crystals: number;
  castle: number;
  fence: number;
};

const GameContext = createContext<GameContextType>({} as GameContextType);

export const useGame = () => {
  return useContext(GameContext);
};

const PlayerNameProvider = ({ children }: GameContextProviderProps) => {
  const [game, setGame] = useState<Game>(initialGame);

  // updates a single player's name to any new string
  const updatePlayerName = (player: keyof Game, newName: string) => {
    setGame((prevGame) => {
      return { ...prevGame, [player]: { ...prevGame[player], name: newName } };
    });
  };

  // updates a player's resource by a positive or negative number
  const affectPlayerResource = (
    player: keyof Game,
    affected: keyof Resource,
    amount: number
  ) => {
    setGame((prevGame) => {
      const result = prevGame[player].resource[affected] + amount;
      const cleanedResult = result < 0 ? 0 : result;
      return {
        ...prevGame,
        [player]: {
          ...prevGame[player],
          resource: {
            ...prevGame[player].resource,
            [affected]: cleanedResult,
          },
        },
      };
    });
  };

  // updates a player's castle or fence by a positive or negative number (within a bound)
  const affectBuilding = (
    player: keyof Game,
    building: "castle" | "fence",
    amount: number
  ) => {
    console.log(`affecting ${player} ${building}`);

    const currentCastleHp = game[player].resource[building];
    const amountToAdd = getAddBetweenBounds(0, 100, currentCastleHp, amount);

    affectPlayerResource(player, building, amountToAdd);
  };

  // inverses both player turn states
  const togglePlayerTurn = () => {
    setGame((prevGame) => {
      const player = {
        ...prevGame.player,
        isActive: !prevGame.player.isActive,
      };
      const computer = {
        ...prevGame.computer,
        isActive: !prevGame.computer.isActive,
      };
      return {
        ...prevGame,
        player,
        computer,
      };
    });
  };

  // gets the currently active player key
  const getActivePlayer = (): keyof Game => {
    if (game.computer.isActive) return "computer";
    return "player";
  };

  return (
    <GameContext.Provider
      value={{
        game,
        updatePlayerName,
        affectPlayerResource,
        affectBuilding,
        togglePlayerTurn,
        getActivePlayer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default PlayerNameProvider;
