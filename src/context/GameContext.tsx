import { createContext, useContext, useState } from "react";
import { initialGame } from "./initialGame";

type GameContextType = {
  game: Game;
  updatePlayerName: (newName: string) => void;
  affectPlayerResource: (
    player: keyof Game,
    affected: keyof Resource,
    amount: number
  ) => void;
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

  const updatePlayerName = (newName: string) => {
    setGame((prevGame) => {
      return { ...prevGame, user: { ...prevGame.player, name: newName } };
    });
  };

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

  return (
    <GameContext.Provider
      value={{ game, updatePlayerName, affectPlayerResource }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default PlayerNameProvider;
