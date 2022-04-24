export type CardInfo = {
  id: number;
  displayName: string;
  costType: "brick" | "weapon" | "crystal";
  costAmount: number;
  affects: Affect[];
  icon: string;
};

type Affect = {
  target: string;
  value: number;
};
