function imprimir(frase){
    document.write(frase)
    saltarLínea();
};

function saltarLínea(){
    document.write("<br> <br>")
};
let multiplicador = 1;
imprimir("WHILE");
while(multiplicador <= 10){
    imprimir(5 * multiplicador);
    multiplicador = multiplicador + 1;
}

imprimir("FOR");

for(let multiplicador = 1; multiplicador<=10; multiplicador=multiplicador+1){
    imprimir(5*multiplicador);
}


