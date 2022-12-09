function imprimir(frase){
    document.write(frase)
    saltarLínea();
};

function saltarLínea(){
    document.write("<br> <br>")
};

let numeroPensado= Math.round(Math.random()*10);
let intentos=3;
let contador=1;

while(contador<=intentos){
    let numeroLanzado= parseInt(prompt("Ingrese un número del 0 al 10"));
    if(numeroLanzado==numeroPensado){
        alert("Le ha atinado en el intento " + contador + " el número pensado era: " + numeroPensado);
        break;
    }
    else
        alert("JAJAJAJ que wey ");
    contador ++;
}