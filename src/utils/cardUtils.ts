import { Game } from "../context/GameContext";
import { CardInfo } from "../types/CardInfo";

export const logCard = (player: keyof Game, card: CardInfo) => {
  console.log(`${player} played ${card.displayName}`, card);
};
