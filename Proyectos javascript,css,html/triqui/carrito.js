
const $btnAgregarLista = document.querySelectorAll(".btnAgregar");
const $btnEliminarLista = document.querySelectorAll(".btnEliminar");
const $textoLista = document.querySelectorAll(".texto");
const $btnEliminarTodoLista = document.querySelectorAll(".eliminarTodo");

let cantidadProduct = [0,0];
let totalProduct = [0,0];

$btnAgregarLista.forEach((btnAgregar,indice) =>{
const btnEliminar = $btnEliminarLista[indice]
const texto = $textoLista[indice]

btnAgregar.addEventListener("click", ()=>{
cantidadProduct[indice] ++;
texto.textContent = cantidadProduct[indice];
texto.classList.remove("textoOculto")
});

btnEliminar.addEventListener("click", ()=>{
    if(cantidadProduct[indice] > 0){
cantidadProduct[indice] --;
texto.textContent = cantidadProduct[indice];
    }else if(cantidadProduct[indice] <= 0){
        texto.classList.add("textoOculto")
    }
})
$btnEliminarTodoLista[indice].addEventListener("click", ()=>{
    cantidadProduct[indice] = 0;
    $textoLista[indice].textContent = cantidadProduct[indice];
    $textoLista[indice].classList.add("textoOculto")
})
})


