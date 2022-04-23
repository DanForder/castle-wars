export const getRandomArrayItem = <Type>(array: Type[]): Type => {
  return array[Math.floor(Math.random() * array.length)];
};

export const getRandomIntegerInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
