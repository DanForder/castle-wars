import { createContext, useContext, useState } from "react";

const initialContext: Game = {
  user: { name: "Player", castleHitPoints: 50, fenceHitPoints: 15 },
  computer: { name: "Computer", castleHitPoints: 50, fenceHitPoints: 15 },
};

type Game = {
  user: Player;
  computer: Player;
};

type Player = {
  name: string;
  castleHitPoints: number;
  fenceHitPoints: number;
};

const GameContext = createContext<any>(null);

export const useGame = () => {
  return useContext(GameContext);
};

const PlayerNameProvider: React.FC = ({ children }) => {
  const [game, setGame] = useState<Game>(initialContext);

  const updatePlayerName = (newName: string) => {
    setGame((prevGame) => {
      return { ...prevGame, user: { ...prevGame.user, name: newName } };
    });
  };

  return (
    <GameContext.Provider value={{ game, updatePlayerName }}>
      {children}
    </GameContext.Provider>
  );
};

export default PlayerNameProvider;
