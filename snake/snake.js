import { getInputDirection } from "./input.js";
import { GRID_CENTER } from "./grid.js";

export const SNAKE_SPEED = 4;

const snakeBody = [{x: GRID_CENTER, y: GRID_CENTER}];

let snakeSize = 4;

export function update(){
  const input = getInputDirection();
  const head = snakeBody[snakeBody.length - 1];

  if(input.x === 0 && input.y === 0){
    return;
  }

  snakeBody.push({x: head.x + input.x, y: head.y + input.y});
  if(snakeBody.length > snakeSize){
    snakeBody.shift();
  }
}

export function draw(gameBoard){
  const snakeEls = document.querySelectorAll('.snake');
  snakeEls.forEach(e => e.remove());
  snakeBody.forEach(seg => {
    const html = `<div class="snake" style="grid-row: ${seg.y}; grid-column: ${seg.x}"></div>`;
    gameBoard.insertAdjacentHTML('beforeend', html);
  });
}

export function growSnake(value){
  snakeSize += value;
}

export function isSnake(pos, {ignoreHead = false} = {}){
  return snakeBody.some((seg, index) => {
    if(ignoreHead && index === snakeBody.length - 1){
      return false;
    }
    return seg.x === pos.x && seg.y === pos.y;
  });
}

export function getSnakeHead(){
  return snakeBody[snakeBody.length - 1];
}

export function isSnakeOverlapping(){
  return isSnake(getSnakeHead(), {ignoreHead: true});
}