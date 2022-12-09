function imprimir(frase){
    document.write(frase)
    saltarLínea();
};

function saltarLínea(){
    document.write("<br> <br>")
};

let numeroMiembros= parseInt(prompt("¿Cuántas personas conforman a su familia? "))
let contador = 1;
let totalEdades= 0;
while( contador<=numeroMiembros){
    edad = parseInt(prompt("Ingrese la edad del familiar"));
    totalEdades= totalEdades + edad;
    contador ++;
}
mediaEdad= totalEdades/numeroMiembros;
imprimir("El promedio de edades en la familia es " + mediaEdad);
imprimir("FIN");