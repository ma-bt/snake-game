import { Coordinate } from "./../types/type";

export const checkEatsFood = (
  head: Coordinate,
  food: Coordinate,
  area: number
): boolean  => {
  const distanceBetweenHeadAndSnakeX: number = Math.abs(head.x - food.x);
  const distanceBetweenHeadAndSnakeY: number = Math.abs(head.y - food.y);
  return (
    distanceBetweenHeadAndSnakeX < area && distanceBetweenHeadAndSnakeY < area
  );
}
