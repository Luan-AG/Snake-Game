

//Snake Values --------------------------------------------------------------------------------------------------

const snakeSpeed = 10;
const snakeBody = [
  { x: 11, y: 11 } //center of the grid
];

let newSegments = 0;

function updateSnake() {//makes the body of the snake to follow the head
  addSegments();

  const inputDirection = getInputDirection(); 
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

function drawSnake(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  })
  
}







//Game Values --------------------------------------------------------------------------------------------------

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/';
    }
    return
  }


  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snakeSpeed) return;


  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  
}

