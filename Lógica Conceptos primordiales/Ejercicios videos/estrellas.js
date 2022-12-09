function imprimir(frase){
    document.write(frase)
    saltarLínea();
};

function saltarLínea(){
    document.write("<br> <br>")
};

for(let linea= 1; linea<=3; linea++){
    for(let columna = 1; columna<=10; columna++){
        document.write("*");
    }

    saltarLínea();
}