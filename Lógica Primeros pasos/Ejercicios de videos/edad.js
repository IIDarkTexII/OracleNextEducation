//Se realiza un pequeño ejericion en donde desde JS se escribe en HTML haciendo operaciones
let anho=2022;
const edadJuan=anho-1994;
const edadCarlos=anho-2002;
const edadPedro= anho-2010;


function imprimir(frase){
    document.write(frase)
    saltarLínea();
};

function saltarLínea(){
    document.write("<br> <br>")
};

let promedio=((edadJuan+edadCarlos+edadPedro)/3);
imprimir("Se quiere calcular el promedio de las edades y el año en que nacieron");
imprimir("Juan nació en el año: ");
imprimir(anho-edadJuan);
imprimir("Carlos nació en el año: ");;
imprimir(anho-edadCarlos);
imprimir("Pedro nació en el año: ");
imprimir(anho-edadPedro);
///////////////////////////////////////////////////////////////////////////////////
imprimir("Juan tiene: " + edadJuan + " años");
imprimir("Carlos tiene: " + edadCarlos + " años");
imprimir("Pedro tiene: " + edadPedro + " años");
imprimir("El promedio de edad de Juan (28), Carlos (20) y Pedro (12) es: " + promedio);
////////////////////////////////////////////////////////////////
let numero = 8;
let multi= [1,2,3,4,5,6,7,8,9,10];
imprimir(numero + " veces 1 es " + (numero*multi[0]));
imprimir(numero + " veces 2 es " + (numero*multi[1]));
imprimir(numero + " veces 3 es " + (numero*multi[2]));
imprimir(numero + " veces 4 es " + (numero*multi[3]));
imprimir(numero + " veces 5 es " + (numero*multi[4]));
imprimir(numero + " veces 6 es " + (numero*multi[5]));
imprimir(numero + " veces 7 es " + (numero*multi[6]));
imprimir(numero + " veces 8 es " + (numero*multi[7]));
imprimir(numero + " veces 9 es " + (numero*multi[8]));
imprimir(numero + " veces 10 es " + (numero*multi[9]));