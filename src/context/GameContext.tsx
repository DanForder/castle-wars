import { createContext, useContext, useState } from "react";
import { CardInfo } from "../types/CardInfo";
import { getAddBetweenBounds } from "../utils/gameUtils";
import { initialGame } from "./initialGame";

type GameContextType = {
  game: Game;
  updatePlayerName: (player: keyof Game, newName: string) => void;
  togglePlayerTurn: () => void;
  getActivePlayer: () => keyof Game;
  affectResource: (
    targetPlayer: keyof Game,
    targetResource: string,
    value: number
  ) => void;
  attemptPlayCard: (
    player: keyof Game,
    costType: CardInfo["costType"],
    costAmount: CardInfo["costAmount"]
  ) => boolean;
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
  builder: number;
  brick: number;
  soldier: number;
  weapon: number;
  magic: number;
  crystal: number;
  castle: number;
  fence: number;
};

const GameContext = createContext<GameContextType>({} as GameContextType);

export const useGame = () => {
  return useContext(GameContext);
};

const GameProvider = ({ children }: GameContextProviderProps) => {
  const [game, setGame] = useState<Game>(initialGame);

  ///////////////////////
  // exposed functions //
  ///////////////////////

  // updates a single player's name to any new string
  const updatePlayerName = (player: keyof Game, newName: string) => {
    setGame((prevGame) => {
      return { ...prevGame, [player]: { ...prevGame[player], name: newName } };
    });
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

  // affects a player resource by a set amount
  const affectResource = (
    targetPlayer: keyof Game,
    targetResource: string,
    value: number
  ) => {
    if (targetResource === "castle" || targetResource === "fence") {
      affectBuilding(targetPlayer, targetResource, value);
    }
    if (
      targetResource === "builder" ||
      targetResource === "brick" ||
      targetResource === "soldier" ||
      targetResource === "weapon" ||
      targetResource === "magic" ||
      targetResource === "crystal"
    ) {
      affectPlayerResource(targetPlayer, targetResource, value);
    }
  };

  // gets the currently active player key
  const getActivePlayer = (): keyof Game => {
    if (game.computer.isActive) return "computer";
    return "player";
  };

  // attempts to subtract the resources required from a player to play a card
  const attemptPlayCard = (
    player: keyof Game,
    costType: CardInfo["costType"],
    costAmount: CardInfo["costAmount"]
  ) => {
    const selectedResourceAmount = game[player].resource[costType];
    const canPlayCard = selectedResourceAmount >= costAmount;

    if (!canPlayCard) {
      console.log(`${player} doesn't have enough money to play this card`);
      return false;
    }

    // player can afford this card, subtract the required amount of resource
    affectResource(player, costType, -costAmount);
    return true;
  };

  ///////////////////////////
  // non-exposed functions //
  ///////////////////////////

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
    const currentCastleHp = game[player].resource[building];
    const amountToAdd = getAddBetweenBounds(0, 100, currentCastleHp, amount);

    affectPlayerResource(player, building, amountToAdd);
  };

  return (
    <GameContext.Provider
      value={{
        game,
        updatePlayerName,
        togglePlayerTurn,
        getActivePlayer,
        affectResource,
        attemptPlayCard,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
