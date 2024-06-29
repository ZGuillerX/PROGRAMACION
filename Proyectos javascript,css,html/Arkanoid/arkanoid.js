const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const $sprite = document.querySelector('#sprite');
const $bricks = document.querySelector("#bricks");
const $score = document.querySelector("#score");
const $TotalscoreInterface = document.querySelector("#contanierLose");
const $scoreContainer = document.querySelector("#scoreContainer");
const $totalScore = document.querySelector("#totalScore");
const $btnRestartGame = document.querySelector("#btnRestartGame");

// Tamaño del canvas
canvas.width = 450;
canvas.height = 400;

// Variables de la pelota
const ballRadius = 4;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 3;
let dy = -3;

// Variables de la paleta
const paddleWidth = 50;
const paddleHeight = 10;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = canvas.height - paddleHeight - 10;
let pressRight = false;
let pressLeft = false;

// Variables de los ladrillos
const brickRowCount = 6;
const brickColumnCount = 13;
const brickWidth = 32;
const brickHeight = 16;
const brickPadding = 2;
const brickOffsetTop = 80;
const brickOffsetLeft = 5;
const bricks = [];
const BRICK_STATUS = {
    ACTIVE: 1,
    DESTROYED: 0
};

// Variables de puntuación
let startScore = 0;
let scoreChanged = false;
let consecutiveHits = 0;
const blockDestruction = 10;
let highScore = 0;
let gameActive = true; 

// Inicializar los ladrillos
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
        const brickRandom = Math.floor(Math.random() * 8);
        bricks[c][r] = {
            x: brickX, y: brickY, statuss: 1, color: brickRandom
        };
    }
}

// Dibujar el juego
function draw() {
    window.requestAnimationFrame(draw);
    cleanCanvas();
    drawPaddle();
    drawBall();
    if (gameActive) {
        moveBall();
    }
    movePaddle();
    drawBricks();
    if (gameActive) {
        collisionDetection();
    }
    if (scoreChanged) {
        updateScore();
        scoreChanged = false;
    }
}

// Dibujar la pelota
function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = "#ffff";
    context.fill();
    context.closePath();
}

// Mover la pelota y detectar colisiones
function moveBall() {
    if (x > canvas.width - ballRadius || x < ballRadius) {
        dx = -dx;
    } else if (y < ballRadius) {
        dy = -dy;
    }

    x += dx;
    y += dy;

    const isBallTouchingPaddle = y + dy > paddleY;
    const isBallSameAsPaddle = x > paddleX && x < paddleX + paddleWidth;

    if (isBallSameAsPaddle && isBallTouchingPaddle) {
        dy = -dy;
        consecutiveHits++;
    }
// Terminar Juego
    if (y + dy > canvas.height - ballRadius) {
        gameActive = false; 
        $scoreContainer.style.display = "none";
        canvas.style.display = "none";
        $TotalscoreInterface.style.display = "block";
        $totalScore.textContent = `Total Score: ${startScore}`;
        highScore = Math.max(highScore, startScore);
    }
}

// Limpiar dibujos anteriores
function cleanCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// Dibujar la paleta
function drawPaddle() {
    context.drawImage(
        $sprite,
        30,
        268,
        paddleWidth,
        paddleHeight,
        paddleX,
        paddleY,
        paddleWidth,
        paddleHeight
    );
}

// Mover la paleta y detectar colisiones
function movePaddle() {
    if (pressRight && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    } else if (pressLeft && paddleX > 0) {
        paddleX -= 7;
    }
}

// Inicializar movimientos de la paleta
function initEvents() {
    document.addEventListener("keydown", startMovement);
    document.addEventListener("keyup", stopMotion);

    function startMovement(e) {
        const { key } = e;
        if (key === "Right" || key === "ArrowRight") {
            pressRight = true;
        } else if (key === "Left" || key === "ArrowLeft") {
            pressLeft = true;
        }
    }

    function stopMotion(e) {
        const { key } = e;
        if (key === "Right" || key === "ArrowRight") {
            pressRight = false;
        } else if (key === "Left" || key === "ArrowLeft") {
            pressLeft = false;
        }
    }
}

// Dibujar ladrillos
function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            const currentBrick = bricks[c][r];
            if (currentBrick.statuss === BRICK_STATUS.DESTROYED) continue;

            const clipX = currentBrick.color * 32;

            context.drawImage(
                $bricks,
                clipX,
                0,
                31,
                14,
                currentBrick.x,
                currentBrick.y,
                brickWidth,
                brickHeight
            );
        }
    }
}

// Detectar colisiones de la pelota con los ladrillos
function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            const currentBrick = bricks[c][r];
            if (currentBrick.statuss === BRICK_STATUS.DESTROYED) continue;

            const isBallSameXAsBrick = x > currentBrick.x && x < currentBrick.x + brickWidth;
            const isBallSameYAsBrick = y > currentBrick.y && y < currentBrick.y + brickHeight;

            if (isBallSameXAsBrick && isBallSameYAsBrick) {
                dy = -dy;
                currentBrick.statuss = BRICK_STATUS.DESTROYED;
                startScore += blockDestruction + (consecutiveHits * 2);
                scoreChanged = true;
                consecutiveHits = 0;
                break;
            }
        }
    }
}

// Actualizar la visualización del puntaje
function updateScore() {
    $score.textContent = startScore;
}

// Reiniciar el juego
function resetGame() {
    gameActive = true; 
    x = canvas.width / 2;
    y = canvas.height - 30;
    dx = 3;
    dy = -3;
    paddleX = (canvas.width - paddleWidth) / 2;
    startScore = 0;
    scoreChanged = true;
    consecutiveHits = 0;

    // Reiniciar ladrillos
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            bricks[c][r].statuss = BRICK_STATUS.ACTIVE;
        }
    }

    canvas.style.display = "block";
    $scoreContainer.style.display = "block";
    $TotalscoreInterface.style.display = "none";
}
$btnRestartGame.addEventListener("click", resetGame);

draw();
initEvents();
