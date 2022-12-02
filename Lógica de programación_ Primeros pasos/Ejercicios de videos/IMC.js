function imprimir(frase){
    document.write(frase)
    saltarLínea();
};

function saltarLínea(){
    document.write("<br> <br>")
};

function calcularIMC(peso,altura){
    let IMC= peso/(altura * altura);
    return (IMC)
}


let imcA = calcularIMC(80,1.80);
let imcF = calcularIMC(90,1.80);
imprimir("El índice de masa corporal es: " + imcA);
imprimir("El índice de masa corporal es: " + imcF);
imprimir("El promedio de IMC de ambos es : " + (imcF + imcA)/2);
//////////////////////////////////////////// Datos del usuario


let nombre= prompt("Nombre:")
let pesoUsuario= prompt( nombre + ", mencione su peso en KG");
let alturaUsuario= prompt(nombre + ", mencione su altura en metros");

let imcUsuario= calcularIMC(pesoUsuario,alturaUsuario);

imprimir("El IMC calculado de " + nombre + " es: " + imcUsuario);