import { CardInfo } from "../types/CardInfo";

const deck: CardInfo[] = [
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
];

export default deck;
