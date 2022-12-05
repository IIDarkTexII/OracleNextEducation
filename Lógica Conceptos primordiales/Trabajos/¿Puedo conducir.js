
function saltarLinea() {
        document.write("<br>");
}

function imprimir(frase) {
    document.write(frase);
    saltarLinea();
}

let edad = parseInt(prompt("¿Cuál es tu edad?"));
let tieneLicencia = prompt("¿Tienes licencia? Responde S o N");

if(edad>=18 && tieneLicencia=="S"){
    imprimir("Siga con su camino joven");
}
else
    imprimir("Noooo joven, de a cómo nos toca?");

