const $tabla = document.querySelector("#tabla");
const $celdas = document.querySelectorAll(".celdas");
const $btnVaciar = document.querySelector("#vaciarTabla");
const $btnSolo = document.querySelector("#btnSolo");
const $btnAmigo = document.querySelector("#btnAmigo");
const $mostrarTabla = document.querySelector("#mostrarTabla");

let reiniciar = false;
let modoDeJuego;
let turnoJugador = 1;
let seleccionarForma = null;
let formaAleatoria = null;

const $btnX = document.querySelector("#btnX");
const $btnO = document.querySelector("#btnO");
const $selectShape = document.querySelector("#selectShape");
const $textJugador1 = document.querySelector(".textJugador1");
const $textJugador2 = document.querySelector(".textJugador2");
const $displaytextStarted = document.querySelector("#displaytextStarted");
const $btnContinuar = document.querySelector("#btnContinuar");
const $loading = document.querySelector("#loading");

$btnX.addEventListener("click", () => {
  seleccionarForma = "X";
  formaAleatoria = "O";
  iniciarJuego();
});

$btnO.addEventListener("click", () => {
  seleccionarForma = "O";
  formaAleatoria = "X";
  iniciarJuego();
});

$btnSolo.addEventListener("click", () => {
  console.log("Elegiste el modo de juego Solo");
  $mostrarTabla.style.display = "none";
  $tabla.style.display = "block";
  modoDeJuego = "Solo";
  seleccionarFormaJuego();
});

$btnAmigo.addEventListener("click", () => {
  console.log("Elegiste el modo de juego Con Amigo");
  $mostrarTabla.style.display = "none";
  $tabla.style.display = "block";
  modoDeJuego = "ConAmigo";
  seleccionarFormaJuego();
});

$btnContinuar.addEventListener("click", () => {
  $selectShape.style.display = "none";
  $displaytextStarted.style.display = "none";
  $tabla.style.display = "block";
  formaAleatoriaTurno();
});

$celdas.forEach((celda, indice) => {
  celda.addEventListener("click", () => marcarCasilla(indice));
});

$btnVaciar.addEventListener("click", () => {
  reiniciarJuego();
});

function seleccionarFormaJuego() {
  $selectShape.style.display = "block";
  $tabla.style.display = "none";
}
function iniciarJuego() {
  $selectShape.style.display = "none";
  $tabla.style.display = "none";
  $displaytextStarted.style.display = "block";

  if (modoDeJuego === "ConAmigo") {
    if (seleccionarForma === "X") {
      $textJugador1.textContent = "Jugador 1 Ha seleccionado la forma X";
      $textJugador2.textContent = "Jugador 2 Ha seleccionado la forma O";
    } else if (seleccionarForma === "O") {
      $textJugador1.textContent = "Jugador 1 Ha seleccionado la forma O";
      $textJugador2.textContent = "Jugador 2 Ha seleccionado la forma X...";
    } 
  } else if (modoDeJuego === "Solo") {
    if (seleccionarForma === "X") {
      $textJugador1.textContent = "Jugador ha seleccionado la forma X";
      $textJugador2.textContent = "La máquina ha seleccionado la forma O";
    } else if (seleccionarForma === "O") {
      $textJugador1.textContent = "Jugador ha seleccionado la forma O";
      $textJugador2.textContent = "La máquina ha seleccionado la forma X";
    }
    
    }
    if (seleccionarForma) {
      formaAleatoriaTurno();
  }
}
let primerMovimientoIAHecho = false;

function formaAleatoriaTurno() {
  if (seleccionarForma && formaAleatoria && !primerMovimientoIAHecho) {
    $loading.textContent = "Seleccionando...";
    $loading.style.animation = "parpadear 1s infinite";
    $btnContinuar.disabled = true;

    setTimeout(function() {
      let isPlayerFirst = Math.random() < 0.5;
      if (isPlayerFirst) {
        turnoJugador = 1;
      } else {
        turnoJugador = 2;
      }

      let startingForma;
      if (isPlayerFirst) {
        startingForma = seleccionarForma;
      } else {
        startingForma = formaAleatoria;
      }

      $loading.style.animation = "none";
      $loading.textContent = `Empieza la forma ${startingForma}`;
      $btnContinuar.disabled = false;

      if (turnoJugador === 2 && modoDeJuego === "Solo" && !primerMovimientoIAHecho) {
        realizarMovimientoIA(); 
        primerMovimientoIAHecho = true; 
      }
    }, 2000);
  }
}

function marcarCasilla(indice) {
  if (modoDeJuego === "Solo") {
    if (turnoJugador === 1 && $celdas[indice].textContent === "") {
      $celdas[indice].textContent = seleccionarForma;
      determinarGanador();
      if (!reiniciar) {
        turnoJugador = 2;
        setTimeout(realizarMovimientoIA, 1000); 
      }
    } else if (turnoJugador === 2 && $celdas[indice].textContent === "") {
      return;  
    }
  } else if (modoDeJuego === "ConAmigo") {
    if ($celdas[indice].textContent === "") {
      if (turnoJugador === 1) {
        $celdas[indice].textContent = seleccionarForma;
      } else {
        $celdas[indice].textContent = formaAleatoria;
      }
      determinarGanador();
      if (!reiniciar) {
        turnoJugador = turnoJugador === 1 ? 2 : 1; 
      }
    }
  }
}

let winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const $textWe = document.querySelector("#textWe");
const $btncontinueGame = document.querySelector("#keepPlaying");
const $btnchangeMode = document.querySelector("#changeMode");
const $displayWinner = document.querySelector("#displayWinner");

function determinarGanador() {
  let empate = true;
  for (let i = 0; i < winner.length; i++) {
    const [a, b, c] = winner[i];
    if (
      $celdas[a].textContent !== "" &&
      $celdas[a].textContent === $celdas[b].textContent &&
      $celdas[b].textContent === $celdas[c].textContent
    ) {
      if(modoDeJuego === "ConAmigo"){
      if ($celdas[a].textContent === seleccionarForma) {
        $textWe.textContent = "¡Gana el Jugador 1 con la forma " + seleccionarForma + "!";
        $displayWinner.style.display = "block"
      } else {
        $textWe.textContent = "¡Gana el Jugador 2 con la forma " + formaAleatoria + "!";
        $displayWinner.style.display = "block"
        $selectShape.style.display = "none"
      }
    }if(modoDeJuego === "Solo"){
      if ($celdas[a].textContent === seleccionarForma) {
        $textWe.textContent = "¡Ganaste";
         $displayWinner.style.display = "block"
        $selectShape.style.display = "none"
      } else {
        $textWe.textContent = "¡Gana La Ia;
         $displayWinner.style.display = "block"
        $selectShape.style.display = "none"
      }
    }
      empate = false;
      reiniciarJuego();
      break;
    }
    if (
      $celdas[a].textContent === "" ||
      $celdas[b].textContent === "" ||
      $celdas[c].textContent === ""
    ) {
      empate = false;
    }
  }
  if (empate) {
    $textWe.textContent = "¡Empate!";
      $displayWinner.style.display = "block"
    reiniciarJuego();
  }
    $selectShape.style.display = "none"
}

$btncontinueGame.addEventListener("click", ()=>{
  $selectShape.style.display = "none";
  $displaytextStarted.style.display = "none";
  $tabla.style.display = "block";
  $displayWinner.style.display = "none";
  formaAleatoriaTurno();
  seleccionarFormaJuego()
})

$btnchangeMode.addEventListener("click", ()=>{
  $mostrarTabla.style.display = "";
  $tabla.style.display = "none";
  seleccionarForma = null;
  formaAleatoria = null;
  turnoJugador = 1;
  reiniciar = false;
  for (let i = 0; i < $celdas.length; i++) {
    $celdas[i].textContent = "";
  }
  $displayWinner.style.display = "none";
})

function reiniciarJuego() {
  for (let i = 0; i < $celdas.length; i++) {
    $celdas[i].textContent = "";
  }
  $selectShape.style.display = "block";
  $tabla.style.display = "none";
  seleccionarForma = null;
  formaAleatoria = null;
  turnoJugador = 1;
  reiniciar = false;
}

const $btnRegresarInicio = document.querySelector("#regresarInicio");

$btnRegresarInicio.addEventListener("click", () => {
  $mostrarTabla.style.display = "";
  $tabla.style.display = "none";
  seleccionarForma = null;
  formaAleatoria = null;
  turnoJugador = 1;
  reiniciar = false;
  for (let i = 0; i < $celdas.length; i++) {
    $celdas[i].textContent = "";
  }
});

function realizarMovimientoIA() {
  if (!reiniciar) {
    let mejorMovimiento = obtenerMejorMovimiento();
    if ($celdas[mejorMovimiento].textContent === "") {
      $celdas[mejorMovimiento].textContent = formaAleatoria;
      determinarGanador();
      if (!reiniciar) {
        turnoJugador = 1; 
      }
    } else {
      realizarMovimientoIA(); 
    }
  }
}

function obtenerMejorMovimiento() {
  let mejorValor = -Infinity;
  let mejorMovimiento = -1;
  for (let i = 0; i < $celdas.length; i++) {
    if ($celdas[i].textContent === "") {
      $celdas[i].textContent = formaAleatoria;
      let valor = minimax(false);
      $celdas[i].textContent = "";
      if (valor > mejorValor) {
        mejorValor = valor;
        mejorMovimiento = i;
      }
    }
  }
  return mejorMovimiento;
}

function minimax(esMaximizador) {
  let ganador = checarGanador();
  if (ganador === formaAleatoria) return 10;
  if (ganador === seleccionarForma) return -10;
  if (esEmpate());

  if (esMaximizador) {
    let mejorValor = -Infinity;
    for (let i = 0; i < $celdas.length; i++) {
      if ($celdas[i].textContent === "") {
        $celdas[i].textContent = formaAleatoria;
        mejorValor = Math.max(mejorValor, minimax(false));
        $celdas[i].textContent = "";
      }
    }
    return mejorValor;
  } else {
    let mejorValor = Infinity;
    for (let i = 0; i < $celdas.length; i++) {
      if ($celdas[i].textContent === "") {
        $celdas[i].textContent = seleccionarForma;
        mejorValor = Math.min(mejorValor, minimax(true));
        $celdas[i].textContent = "";
      }
    }
    return mejorValor;
  }
}

function checarGanador() {
  for (let i = 0; i < winner.length; i++) {
    const [a, b, c] = winner[i];
    if (
      $celdas[a].textContent !== "" &&
      $celdas[a].textContent === $celdas[b].textContent &&
      $celdas[a].textContent === $celdas[c].textContent
    ) {
      return $celdas[a].textContent;
    }
  }
  return null;
}

function esEmpate() {
  for (let i = 0; i < $celdas.length; i++) {
    if ($celdas[i].textContent === "") {
      return false;
    }
  }
  return true;
}

//falta mejorar el diseño para que sea mas interactivo y mas animaciones al momento de seleccionar
//falta mostrar el numero de victorias empates derrotas, determinar un maximo premios y mucho mas
//...
