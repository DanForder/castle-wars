import { CardInfo } from "../types/CardInfo";

export const getCostImage = (type: CardInfo["costType"]): string => {
  return {
    brick: "🧱",
    weapon: "⚔️",
    crystal: "🔮",
  }[type];
};
