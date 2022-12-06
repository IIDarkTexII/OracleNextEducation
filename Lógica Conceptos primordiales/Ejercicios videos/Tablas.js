function imprimir(frase){
    document.write(frase)
    saltarLínea();
};

function saltarLínea(){
    document.write("<br> <br>")
};
let multiplicador = 1;

while(multiplicador <= 10){
    imprimir(5 * multiplicador);
}
