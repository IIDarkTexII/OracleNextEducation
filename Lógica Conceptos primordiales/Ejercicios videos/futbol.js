function imprimir(frase){
    document.write(frase)
    saltarLínea();
};

function saltarLínea(){
    document.write("<br> <br>")
};


let nombreE= prompt("Nombre del equipo: ");
let victorias= parseInt(prompt("Número de victorias: "));
let empate= parseInt(prompt("Número de empates: "));

puntosT = (victorias * 3) + empate;

imprimir("El total de puntos del equipo " + nombreE + " es: " + puntosT);

if (puntosT > 10){
    imprimir("El equipo está mejor que el año pasado");
}
else if (puntosT<10){
    imprimir("El equipo está peor que el año pasado");
}
else
    imprimir("El equipo está igual que el año pasado");



