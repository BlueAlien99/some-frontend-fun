import { isSnake, growSnake } from "./snake.js";
import { getFreeEmptyCell } from "./grid.js";

let food = getFreeEmptyCell();
let moveFood = true;

const GROWTH_RATE = 1;

export function update(){
  if(isSnake(food)){
    food = getFreeEmptyCell();
    moveFood = true;
    growSnake(GROWTH_RATE);
  }
}

export function draw(gameBoard){

  if(!moveFood){
    return;
  }

  const oldFoodEl = document.querySelector('.food');

  if(oldFoodEl){
    oldFoodEl.remove();
  }

  const foodEl = document.createElement('div');
  foodEl.classList.add('food');
  foodEl.style = `grid-row: ${food.y}; grid-column: ${food.x}`;
  gameBoard.appendChild(foodEl);
  moveFood = false;

  setTimeout(() => foodEl.classList.add('ripe'), 0);
}