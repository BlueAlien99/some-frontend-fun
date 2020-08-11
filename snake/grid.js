import { isSnake } from "./snake.js";

export const GRID_SIZE = getComputedStyle(document.documentElement).getPropertyValue('--grid-size');
export const GRID_CENTER = Math.round(GRID_SIZE / 2);

export function getFreeEmptyCell(){
  let pos = {};
  do{
    pos.x = Math.floor(Math.random() * GRID_SIZE) + 1;
    pos.y = Math.floor(Math.random() * GRID_SIZE) + 1;
  } while(isSnake(pos));
  return pos;
}

export function isOutsideGrid(pos){
  return (
    pos.x > GRID_SIZE || pos.x < 1 || 
    pos.y > GRID_SIZE || pos.y < 1
  )
}