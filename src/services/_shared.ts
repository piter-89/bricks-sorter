export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const elementsEnum = ["bricks-triangle", "bricks-circle", "bricks-square", "bricks-trapezoid"];