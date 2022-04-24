import { CardInfo } from "../types/CardInfo";

export const logCard = (player: "player" | "computer", card: CardInfo) => {
  console.log(`${player} played ${card.displayName}`);
};
