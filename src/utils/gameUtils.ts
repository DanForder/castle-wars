import { clamp } from "./commonFunctions";

export const getBuildingHeight = (hp: number): number => {
  const result = hp / 100;

  if (result > 1) {
    return 1;
  }

  if (result < 0) {
    return 0;
  }

  return result;
};

export const getAddBetweenBounds = (
  minBound: number,
  maxBound: number,
  current: number,
  amount: number
): number => {
  const naturalResult = current + amount;
  const clampedResult = clamp(minBound, maxBound, naturalResult);
  const isNegative = Math.sign(amount) === -1;

  if (naturalResult === clampedResult) return amount;

  return isNegative ? minBound - current : maxBound - current;
};
