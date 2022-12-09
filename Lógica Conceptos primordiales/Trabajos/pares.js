function imprimir(frase){
    document.write(frase)
    saltarLínea();
};

function saltarLínea(){
    document.write("<br> <br>")
};

let par= 2;
let limite= 100;

while(par<=limite){
    imprimir(par);
    par = par + 2;
}
