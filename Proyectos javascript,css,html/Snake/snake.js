//seleccionar los elementos del DOM y crear variables correspondientes para su uso
//seleccionar el elemento canvas del DOM
const canvas = document.querySelector("canvas"); 

//contexto de renderizado 2D para canvas(aqui puse el contexto en español xd, pero bno ya se queda asi)
const contexto = canvas.getContext("2d"); 

//boton para reiniciar el juego
const $btnRestartGame = document.querySelector("#btnRestartGame"); 

//boton para mover la serpiente hacia arriba
const $btnUp = document.querySelector("#btnUp");

//boton para mover la serpiente hacia abajo
const $btnDown = document.querySelector("#btnDown");

//boton para mover la serpiente hacia la izquierda
const $btnLeft = document.querySelector("#btnLeft");

//boton para mover la serpiente hacia la derecha
const $btnRight = document.querySelector("#btnRight"); 

//contenedor del puntaje
const $displayScore = document.querySelector("#containerScore");

//texto del puntaje actual
const $scoreTotalText = document.querySelector("#textScore"); 

//contenedor del puntaje total
const $scoreTotalContainer = document.querySelector("#containerTotalScore");

//texto de game over
const $textGameOver = document.querySelector("#textGameOver");

//ancho y alto del canvas
canvas.width = 340;
canvas.height = 300;

//variables para la serpiente

//ancho de cada parte de la serpiente
const snakeWidth = 20; 

//alto de cada parte de la serpiente
const snakeHeight = 20; 

//longitud inicial de la serpiente (dos partes)
const initialSnakeLength = 2; 

//inicializar la serpiente con una longitud inicial
let snake = [];
for (let i = 0; i < initialSnakeLength; i++) {
  snake.push({ x: canvas.width / 2 - i * snakeWidth, y: canvas.height - 200 });
}

//variables globales para la dirección de la serpiente, velocidad, comida, puntaje y estado del juego
//dirección inicial de la serpiente
let direction = "RIGHT";

//velocidad de movimiento de la serpiente
const snakeVelocity = 10;
//posición inicial de la comida
let food = getRandomFoodPosition();
//puntos obtenidos por comer 
let foodPoint = 10;
//puntaje total acumulado
let scoreTotal = 0; 
//Estado del juego (en ejecucion o no)
let gameRunning = true; 


//función para detectar eventos del teclado y cambiar la dirección de la serpiente
document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  // capturar la tecla presionada
  const keyPressed = event.key;

  // variables para las direcciones de la serpiente
  const goingUp = direction === "UP";
  const goingDown = direction === "DOWN";
  const goingRight = direction === "RIGHT";
  const goingLeft = direction === "LEFT";

  //se cambia la dirección según la tecla presionada, evitando movimientos opuestos que retrocedan
  if (keyPressed === "ArrowLeft" && !goingRight) {

    //cambiar la dirección a la izquierda si no estamos yendo hacia la derecha
    direction = "LEFT"; 
  }
  if (keyPressed === "ArrowUp" && !goingDown) {

    //cambiar la dirección hacia arriba si no estamos yendo hacia abajo
    direction = "UP"; 
  }
  if (keyPressed === "ArrowRight" && !goingLeft) {

    //cambiar la dirección a la derecha si no estamos yendo hacia la izquierda
    direction = "RIGHT"; 
  }
  if (keyPressed === "ArrowDown" && !goingUp) {

     //cambiar la dirección hacia abajo si no estamos yendo hacia arriba
    direction = "DOWN";
  }
}


//boton para mover la serpiente hacia arriba
$btnUp.addEventListener("click", () => {
  //se verifica que la serpiente no esté yendo hacia abajo para evitar retroceder
  if (direction !== "DOWN") {

     //se cambia la dirección hacia arriba
    direction = "UP";
  }
});

//boton para mover la serpiente hacia abajo
$btnDown.addEventListener("click", () => {
  //se verifica que la serpiente no esté yendo hacia arriba para evitar retroceder
  if (direction !== "UP") {

    //se cambia la dirección hacia abajo
    direction = "DOWN"; 
  }
});

//boton para mover la serpiente hacia la izquierda
$btnLeft.addEventListener("click", () => {
  //se verifica que la serpiente no esté yendo hacia la derecha para evitar retroceder
  if (direction !== "RIGHT") {

    //se cambia la dirección hacia la izquierda
    direction = "LEFT"; 
  }
});


//boton para mover la serpiente hacia la derecha
$btnRight.addEventListener("click", () => {
  //se verifica que la serpiente no esté yendo hacia la izquierda para evitar retroceder
  if (direction !== "LEFT") {

    //se cambia la dirección hacia la derecha
    direction = "RIGHT"; 
  }
});

//funcion para obtener una comida aleatoria dentro del canvas
function getRandomFoodPosition() {
  let foodPosition;
  
  while (true) {
    //posición aleatoria para la comida para que no se superponga con ninguna parte del cuerpo de la serpiente
    const foodX = Math.floor(Math.random() * (canvas.width / snakeWidth)) * snakeWidth;
    const foodY = Math.floor(Math.random() * (canvas.height / snakeHeight)) * snakeHeight;
    foodPosition = { x: foodX, y: foodY };

    // Verificar si la posición generada para la comida no coincide con ninguna posición del cuerpo de la serpiente
    if (!snake.some(segment => segment.x === foodPosition.x && segment.y === foodPosition.y)) {
      break; // Salir del bucle si encontramos una posición válida para la comida
    }
  }
  //devolover la posicion de la comida
  return foodPosition;
}


// funcion para dibujar la serpiente
function drawSnake() {

  //limpiar los dibujos anteriores para que no quede una linea
  contexto.clearRect(0, 0, canvas.width, canvas.height);
  snake.forEach(segment => {
    //color de la serpiente
    contexto.fillStyle = "#0fff";
    //dibujar a la serpiente
    contexto.fillRect(segment.x, segment.y, snakeWidth, snakeHeight);
  });
}

//funcion para dibujar la comida
function drawFood() {

  //color de la comida
  contexto.fillStyle = "red";
  contexto.fillRect(food.x, food.y, snakeWidth, snakeHeight);
}

//funcion para saber si la serpiente se choco con su propio cuerpo
function checkCollision() {
  // Obtener la cabeza y el cuerpo de la serpiente, dividiendo el array
  const [head, ...body] = snake;

  // Iterar sobre cada parte del cuerpo de la serpiente
  for (const segment of body) {
    // Vericar si la cabeza de la serpiente colisiona con algúna parte del cuerpo
    if (head.x === segment.x && head.y === segment.y) {
      // Si hay colisión se devuelve true
      return true;
    }
  }

  // Si no hay colisión con ningúna parte del cuerpo, devolvemos false
  return false;
}


//funcion para mover a la serpiente y la velocidad 
function moveSnake() {

  //crear un objeto para la nueva cabeza de la serpiente
  let newHead = { x: snake[0].x, y: snake[0].y };

  // Evaluamos la dirección actual de la serpiente
  switch (direction) {
    case "RIGHT":
      //incrementamos la posición x para mover hacia la derecha
      newHead.x += snakeVelocity;
      break;
    case "LEFT":
      //decrementamos la posición x para mover hacia la izquierda
      newHead.x -= snakeVelocity;
      break;
    case "UP":
      //decrementamos la posición y para mover hacia arriba
      newHead.y -= snakeVelocity;
      break;
    case "DOWN":
      //incrementamos la posición y para mover hacia abajo
      newHead.y += snakeVelocity;
      break;
  }
  
  // se ajusta la posición si la nueva cabeza sale del límite del canvas
  if (newHead.x >= canvas.width) {
    newHead.x = 0;
  } else if (newHead.x < 0) {
    newHead.x = canvas.width - snakeWidth;
  } else if (newHead.y >= canvas.height) {
    newHead.y = 0;
  } else if (newHead.y < 0) {
    newHead.y = canvas.height - snakeHeight;
  }

  //insertar la nueva cabeza al principio del array snake
  snake.unshift(newHead);

  //se verifica si la serpiente ha comido la comida
  if (newHead.x === food.x && newHead.y === food.y) {
    //se genera una nueva posición aleatoria para la comida
    food = getRandomFoodPosition();
    // incremento del puntaje
    scoreTotal += foodPoint;
  } else {
    // se remueve la ultima parte de la serpiente si no come
    snake.pop();
  }

  // verificar si hay una colisión con el cuerpo de la serpiente
  if (checkCollision()) {
    // se termina el juego si hay una colision
    gameRunning = false;
  }
}


//boton para reiniciar el juego
$btnRestartGame.addEventListener("click", restartGame);

//función para reiniciar el juego al presionar el botón de reinicio
function restartGame() {
  //se reinicia la serpiente y se vacia el array, creando una nueva serpiente
  snake = [];
  for (let i = 0; i < initialSnakeLength; i++) {
    snake.push({ x: canvas.width / 2 - i * snakeWidth, y: canvas.height - 200 });
  }

  // reiniciar la dirección de la serpiente hacia la derecha
  direction = "RIGHT";

  //reiniciar el puntaje total
  scoreTotal = 0;

  //el juego se ejecuta 
  gameRunning = true;

  //se genera una nueva posición para la comida
  food = getRandomFoodPosition();

  //se limpia el timeout del bucle principal del juego
  clearTimeout(gameLoopTimeout);

  //se oculta el contenedor del puntaje total y se muestra el canvas
  $scoreTotalContainer.style.display = "none";
  canvas.style.display = "block";

  // se inicia nuevamente el bucle principal del juego
  gameLoop();
}

//funcion para actualizar el puntaje mostrado en la interfaz
function updateScore() {
  $scoreTotalText.textContent = scoreTotal;
}

// Variable para el timeout del bucle principal del juego
let gameLoopTimeout;


// funcion que contiene el bucle principal del juego
function gameLoop() {
  // Si el juego está en proceso
  if (gameRunning) {
    // se dibuja la serpiente, la comida,se mueve la serpiente y se actualiza el puntaje
    drawSnake();
    drawFood();
    moveSnake();
    updateScore();

    // se configura el próximo ciclo del juego
    gameLoopTimeout = setTimeout(gameLoop, 100);
  } else {
    // Si el juego se termino, se muestra un mensaje de Game Over y el puntaje total
    $textGameOver.textContent = "Game Over!";
    document.querySelector("#ScoreTotal").textContent = `Total Score: ${scoreTotal}`;
    $scoreTotalContainer.style.display = "block";
    canvas.style.display = "none";
  }
}


// llamar a la funcion que contiene todo el juego(bucle)
gameLoop();

//falta solucionar bugs para que al presionar varias teclas al mismo tiempo no se trabe el juego
//falta añadirle estilos y interactividad a la serpiente lo mismo con las comida
//falta hacer un diseño responsivo para todas las pantallas(en progreso)
//...
