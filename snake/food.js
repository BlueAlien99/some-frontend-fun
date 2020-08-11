import { isSnake, growSnake } from "./snake.js";
import { getFreeEmptyCell } from "./grid.js";

let food = getFreeEmptyCell();

const GROWTH_RATE = 1;

export function update(){
  if(isSnake(food)){
    food = getFreeEmptyCell();
    growSnake(GROWTH_RATE);
  }
}

export function draw(gameBoard){
  const foodEl = document.querySelector('.food');
  if(foodEl){
    foodEl.remove();
  }
  const html = `<div class="food" style="grid-row: ${food.y}; grid-column: ${food.x}"></div>`;
  gameBoard.insertAdjacentHTML('beforeend', html);
}