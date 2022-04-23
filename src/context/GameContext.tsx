import { createContext, useContext, useState } from "react";
import { initialGame } from "./initialGame";

type GameContextType = {
  game: Game;
  updatePlayerName: (newName: string) => void;
};

type GameContextProviderProps = {
  children: React.ReactNode;
};

export type Game = {
  player: Player;
  computer: Player;
};

type Player = {
  name: string;
  castleHitPoints: number;
  fenceHitPoints: number;
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

  return (
    <GameContext.Provider value={{ game, updatePlayerName }}>
      {children}
    </GameContext.Provider>
  );
};

export default PlayerNameProvider;
