//Uso del while
function imprimir(frase){
    document.write(frase)
    saltarLínea();
};

function saltarLínea(){
    document.write("<br> <br>")
};

let aMundial= 1930;
let limite= parseInt(prompt("¿Hasta que año quieres saber los años de los mundiales?"))
alert("Primer mundial fue en el año: " + aMundial);

while(aMundial<=limite){
    imprimir("Hubo mundial en el año " + aMundial);
    aMundial = aMundial + 4;
}
