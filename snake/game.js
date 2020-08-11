import {update as updateSnake, draw as drawSnake, getSnakeHead, isSnakeOverlapping, SNAKE_SPEED} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js';
import {isOutsideGrid} from './grid.js';

const gameBoard = document.querySelector('#game-board');

let lastRenderTime = 0;
let gameOver = false;

function main(currentTime){

  const rafID = window.requestAnimationFrame(main);

  const frameAge = (currentTime - lastRenderTime) / 1000;

  if(frameAge < 1 / SNAKE_SPEED){
    return;
  }

  lastRenderTime = currentTime;

  update();

  if(gameOver){
    window.cancelAnimationFrame(rafID);
    if(confirm('You lost the game 😢')){
      window.location.reload();
    }
    return;
  }

  draw();
}

window.requestAnimationFrame(main);

function update(){
  updateSnake();
  updateFood();
  checkGameOver();
}

function draw(){
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkGameOver(){
  gameOver = isOutsideGrid(getSnakeHead()) || isSnakeOverlapping();
}