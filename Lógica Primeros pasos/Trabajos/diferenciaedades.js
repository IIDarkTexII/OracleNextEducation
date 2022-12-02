function imprimir(frase){
    document.write(frase)
    saltarLínea();
};

function saltarLínea(){
    document.write("<br> <br>")
};

let anho=2022;
const edadMia=anho-2001;
const edadHermano=anho-2006;
let diferenciaEdades= edadMia-edadHermano;

imprimir("Yo tengo: " + edadMia + " años");
imprimir("Mi hermano tiene: " + edadHermano + " años");
imprimir("La diferencia de edades es: " + diferenciaEdades + " años");
