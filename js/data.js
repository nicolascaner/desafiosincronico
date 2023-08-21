addEventListener('DOMContentLoaded', obtener);

function obtener(){
    let datos = localStorage.getItem("datos");
    let span = document.getElementById('data');

    span.innerHTML = datos;
}