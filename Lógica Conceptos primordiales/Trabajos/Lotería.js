function saltarLinea() {
    document.write("<br>");    
    document.write("<br>");    
    document.write("<br>");    
}  

function imprimir(frase) {
    document.write(frase);
    saltarLinea();
}
function sorteo(n) { 
    return Math.round(Math.random()*n);
}   

let numeroPensado = sorteo(10);
let numeroLanzado = parseInt(prompt("Ingrese un número entre 0 y 10"))

if(numeroPensado == numeroLanzado){
        imprimir("<h1>Le ha atinado y ganado al sistema</h1>");
}
else{
    if (numeroLanzado > numeroPensado){
        imprimir("JAJAJAJ que wey, el número pensado era: " + numeroPensado + " y es menor que tu número");
            } 
    else{
        imprimir("JAJAJAJ que wey, el número pensado era: " + numeroPensado + " y es mayor que tu número");
            }
}

