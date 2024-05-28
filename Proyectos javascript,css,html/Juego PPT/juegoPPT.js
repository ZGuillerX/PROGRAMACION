let btnPiedra = document.querySelector("#btnPiedra");
let btnPapel = document.querySelector("#btnPapel");
let btnTijera = document.querySelector("#btnTijera");
let textoJugador = document.querySelector("#textoJugador");
let textoMaquina = document.querySelector("#textoMaquina");
let textoResultado = document.querySelector("#ganaste");

function pptMaquina(eleccionJugador) {
    const opciones = ["Piedra", "Papel", "Tijera"];
    let eleccionMaquina = Math.floor(Math.random() * 3);

    textoMaquina.textContent = "La máquina está eligiendo... ";
    textoMaquina.classList.add("elegir");

    setTimeout(() => {
        textoMaquina.classList.remove("elegir");
        textoMaquina.textContent = "La máquina eligió " + opciones[eleccionMaquina];

        if (eleccionJugador === eleccionMaquina) {
            textoResultado.textContent = "Empate";
        } else if (
            (eleccionJugador === 0 && eleccionMaquina === 2) ||
            (eleccionJugador === 1 && eleccionMaquina === 0) ||
            (eleccionJugador === 2 && eleccionMaquina === 1)
        ) {
            textoResultado.textContent = "Ganaste";
        } else {
            textoResultado.textContent = "Perdiste";
        }
    }, 1500);
}

btnPiedra.addEventListener("click", function() {
    textoJugador.textContent = "Elegiste Piedra";
    pptMaquina(0);
});

btnPapel.addEventListener("click", function() {
    textoJugador.textContent = "Elegiste Papel";
    pptMaquina(1);
});

btnTijera.addEventListener("click", function() {
    textoJugador.textContent = "Elegiste Tijera";
    pptMaquina(2);
});
