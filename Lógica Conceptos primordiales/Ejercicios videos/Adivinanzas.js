function imprimir(frase){
    document.write(frase)
    saltarLínea();
};

function saltarLínea(){
    document.write("<br> <br>")
};

let numeroPensado= Math.round(Math.random()*10);
let numeroLanzado= parseInt(prompt("Ingrese un número del 0 al 10"));

if(numeroLanzado==numeroPensado){
    imprimir("<h1>Le ha atinado y ganado al sistema</h1>");
}
else
    imprimir("<h3>JAJAJAJ que wey, el número pensado era: </h3> " +  numeroPensado);
