let montoD = 5000;
let contraseña = "1234";
let intentosMax = 3;
let intentosR = 0;

let factura = document.querySelector('[data-id="factura"]');
let seccion = document.querySelector('[data-id="seccion"]');
let botonDeRetiro = document.querySelector('[data-id="btn-retirar"]');
let seccionMonto = document.querySelector('[data-id="seccionMonto"]');
let botonMonto = document.querySelector('[data-id="btn-mostrarMonto"]');
let botonOcultarMonto = document.querySelector('[data-id="btn-ocultarMonto"]');
let inputContrasena = document.getElementById("contrasena");
let inputCantidadRetirar = document.getElementById("cantidadRetirar");
let textoMonto = document.getElementById("textoMonto"); // Agregado para referencia al texto del monto

function retirarDinero() {
    intentosR++;
    let password = inputContrasena.value;
    if (password !== contraseña) {
        let calcular = intentosMax - intentosR;
        alert(`Contraseña incorrecta. Te quedan ${calcular} intentos.`);
        if (intentosR === intentosMax) {
            document.getElementById("btn-retirarDinero").disabled = true;
            alert(`Cuenta bloqueada.`);
        }
    } else {
        let ingresarCantidad = parseInt(inputCantidadRetirar.value);
        if (isNaN(ingresarCantidad) || ingresarCantidad <= 0) {
            alert("Por favor ingresa una cantidad válida");
        } else if (montoD < ingresarCantidad) {
            alert("Saldo insuficiente");
        } else {
            let nuevoMonto = montoD - ingresarCantidad;
            mostrarFactura(ingresarCantidad, nuevoMonto); // Llama a la función para mostrar la factura
            montoD = nuevoMonto;
            mostrarMonto(); // Actualiza el monto en la pantalla
        }
    }
}

function mostrarFactura(cantidadRetirada, nuevoSaldo) {
    let ocultar1 = factura.classList.toggle("ocultarFactura");
    if (ocultar1) {
        factura.textContent = "Mostrar Monto";
    } else {
        factura.textContent = `Usted retiró $${cantidadRetirada}. Su saldo final es de $${nuevoSaldo}`;
        mostrarMonto(); // Actualiza el monto en la pantalla
    } 
}

function toggleSeccion() {
    if (seccion.classList.toggle("ocultar")) {
        seccion.classList.add("ocultar");
        botonDeRetiro.textContent = "Retirar";
    } else {
        seccion.classList.remove("ocultar");
        botonDeRetiro.textContent = "Volver";
        ocultarFactura(); // Oculta la factura al volver
    }
}

function mostrarMonto() {
    seccionMonto.classList.remove("ocultarSeccionMonto");
    textoMonto.textContent = `Su monto es de $${montoD}`;
    botonMonto.style.display = "none"; // Oculta el botón "Mostrar Monto"
    botonOcultarMonto.style.display = "block"; // Muestra el botón "Ocultar Monto"
}

function ocultarMonto() {
    seccionMonto.classList.add("ocultarSeccionMonto");
    botonMonto.style.display = "block"; // Muestra el botón "Mostrar Monto"
    botonOcultarMonto.style.display = "none"; // Oculta el botón "Ocultar Monto"
}

function cambiarContraseña() {
    let nuevaContraseña = prompt("Ingresa la nueva contraseña:");
    
    if (nuevaContraseña !== null && nuevaContraseña.trim() !== "") {
        contraseña = nuevaContraseña;
        alert("Contraseña cambiada exitosamente.");
    } else {
        alert("No se ha ingresado una contraseña válida.");
    }
}

// Obtener referencia al botón "Cambiar Contraseña"
let botonCambiarContraseña = document.getElementById("btn-cambiarContraseña");

// Agregar evento de clic al botón "Cambiar Contraseña"
botonCambiarContraseña.addEventListener("click", cambiarContraseña);

// Event listener para el botón "Mostrar Monto"
botonMonto.addEventListener("click", mostrarMonto);

// Event listener para el botón "Ocultar Monto"
botonOcultarMonto.addEventListener("click", ocultarMonto);

// Event listener para el botón "Retirar Dinero"
document.getElementById("btn-retirarDinero").addEventListener("click", retirarDinero);

// Event listener para el botón "Volver"
botonDeRetiro.addEventListener("click", toggleSeccion);
