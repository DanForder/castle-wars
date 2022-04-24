import { CardInfo } from "../types/CardInfo";

const mockPlayerHand: CardInfo[] = [
  {
    id: 1,
    displayName: "Reserve",
    icon: "🚀",
    costType: "brick",
    costAmount: 3,
    affects: [
      {
        target: "castle",
        value: 8,
      },
    ],
  },
  {
    id: 2,
    displayName: "Knight",
    icon: "🚀",
    costType: "weapon",
    costAmount: 2,
    affects: [
      {
        target: "attack",
        value: 3,
      },
    ],
  },
  {
    id: 3,
    displayName: "Defence",
    icon: "🚀",
    costType: "brick",
    costAmount: 3,
    affects: [
      {
        target: "fence",
        value: 6,
      },
    ],
  },
  {
    id: 4,
    displayName: "Curse",
    icon: "🚀",
    costType: "crystal",
    costAmount: 25,
    affects: [
      {
        target: "all",
        value: 1,
      },
      {
        target: "enemies all",
        value: -1,
      },
    ],
  },
  {
    id: 5,
    displayName: "Conjure Weapons",
    icon: "🚀",
    costType: "crystal",
    costAmount: 4,
    affects: [
      {
        target: "weapons",
        value: 8,
      },
    ],
  },
  {
    id: 6,
    displayName: "Wall",
    icon: "🚀",
    costType: "brick",
    costAmount: 1,
    affects: [
      {
        target: "fence",
        value: 3,
      },
    ],
  },
  {
    id: 7,
    displayName: "Wall",
    icon: "🚀",
    costType: "brick",
    costAmount: 1,
    affects: [
      {
        target: "fence",
        value: 3,
      },
    ],
  },
  {
    id: 8,
    displayName: "Sorcerer",
    icon: "🚀",
    costType: "crystal",
    costAmount: 8,
    affects: [
      {
        target: "magic",
        value: 1,
      },
    ],
  },
];

export default mockPlayerHand;
