const board = document.querySelector(".board");
const ball = document.createElement("div");
ball.classList.add("ball");
ball.style.bottom = "30px";
ball.style.left = "230px";
const user = document.createElement("div");
user.classList.add("user");
user.style.left = "230px";
user.style.bottom = "10px";
board.append(user);
board.append(ball);
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = "900px";
let [xDirection, yDirection] = [2, 2];

let currentPositionInPx = ["230px", "10px"];
let currentPosition = [
  +currentPositionInPx[0].split("px")[0],
  +currentPositionInPx[1].split("px")[0],
];

let ballCurrentPositionInPx = ['230px', '30px']
let ballCurrentPosition = [ +ballCurrentPositionInPx[0].split("px")[0],
+ballCurrentPositionInPx[1].split("px")[0],]

class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    this.topLeft = [xAxis, yAxis + blockHeight];
  }
}

const blocks = [
  new Block(10, 570),
  new Block(120, 570),
  new Block(230, 570),
  new Block(340, 570),
  new Block(450, 570),
  new Block(560, 570),
  new Block(670, 570),
  new Block(780, 570),
  new Block(10, 540),
  new Block(120, 540),
  new Block(230, 540),
  new Block(340, 540),
  new Block(450, 540),
  new Block(560, 540),
  new Block(670, 540),
  new Block(780, 540),
  new Block(10, 510),
  new Block(120, 510),
  new Block(230, 510),
  new Block(340, 510),
  new Block(450, 510),
  new Block(560, 510),
  new Block(670, 510),
  new Block(780, 510),
];

function createBLocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    board.append(block);
  }
}

function drawBall() {
  ball.style.bottom = +ball.style.bottom.split("px")[0] + "px";
  ball.style.left = +ball.style.left.split("px")[0] + "px";
}

function drawUser() {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
}

function moveUser(e) {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        console.log(currentPosition[0] > 0);
        drawUser();
      }
      break;
    case "ArrowRight":
      if (currentPosition[0] < +boardWidth.split("px")[0] - blockWidth) {
        currentPosition[0] += 10;
        console.log(currentPosition[0]);
        drawUser();
      }
      break;
  }
}
document.addEventListener("keydown", moveUser);

function moveBall() {
  ballCurrentPosition[0] += xDirection;
  ballCurrentPosition[1] += yDirection;
  drawBall();
  checkForCollisions();
}
timerId = setInterval(moveBall, 30);

//check for collisions
function checkForCollisions() {
  //check for block collision
  for (let i = 0; i < blocks.length; i++) {
    if (
      ballCurrentPosition[0] > blocks[i].bottomLeft[0] &&
      ballCurrentPosition[0] < blocks[i].bottomRight[0] &&
      ballCurrentPosition[1] + ballDiameter > blocks[i].bottomLeft[1] &&
      ballCurrentPosition[1] < blocks[i].topLeft[1]
    ) {
      const allBlocks = Array.from(document.querySelectorAll(".block"));
      allBlocks[i].classList.remove("block");
      blocks.splice(i, 1);
      changeDirection();
      if (blocks.length == 0) {
        clearInterval(timerId);
        document.removeEventListener("keydown", moveUser);
      }
    }
  }
  // check for wall hits
  if (
    ballCurrentPosition[0] >= boardWidth - ballDiameter ||
    ballCurrentPosition[0] <= 0 ||
    ballCurrentPosition[1] >= boardHeight - ballDiameter
  ) {
    changeDirection();
  }

  //check for user collision
  if (
    ballCurrentPosition[0] > currentPosition[0] &&
    ballCurrentPosition[0] < currentPosition[0] + blockWidth &&
    ballCurrentPosition[1] > currentPosition[1] &&
    ballCurrentPosition[1] < currentPosition[1] + blockHeight
  ) {
    changeDirection();
  }

  //game over
  if (ballCurrentPosition[1] <= 0) {
    clearInterval(timerId);
    scoreDisplay.innerHTML = "You lose!";
    document.removeEventListener("keydown", moveUser);
  }
}

function changeDirection() {
  if (xDirection === 2 && yDirection === 2) {
    yDirection = -2;
    return;
  }
  if (xDirection === 2 && yDirection === -2) {
    xDirection = -2;
    return;
  }
  if (xDirection === -2 && yDirection === -2) {
    yDirection = 2;
    return;
  }
  if (xDirection === -2 && yDirection === 2) {
    xDirection = 2;
    return;
  }
}

moveBall();
createBLocks();
