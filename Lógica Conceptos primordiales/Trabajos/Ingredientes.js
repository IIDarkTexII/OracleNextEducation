

let ingredientes = [];
let cantidad = parseInt(prompt("¿Cuántos ingredientes vas a añadir?"));
var contador = 1;

while(contador <= cantidad) {
    let ingrediente = prompt("Informe el ingrediente " + contador);
    let existe = false;
    for(let posicion = 0; posicion < ingredientes.length; posicion++) {
    
        if(ingredientes[posicion] == ingrediente){
            existe = true;
            alert("Repitió el ingrediente " + ingrediente);
            break;
        }
    }

    if(existe == false) {
        ingredientes.push(ingrediente);
        contador++;
    }
}
console.log(ingredientes);

