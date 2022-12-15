/* Este programa es una aplicación que dibuja un círculo azul en movimiento en una pantalla (canvas). 
Cada vez que se actualiza la pantalla, se dibuja un círculo azul en una nueva posición en la pantalla, y 
se elimina el círculo anterior. Esto da la impresión de que el círculo se está moviendo en la pantalla. 
El programa utiliza una función llamada setInterval para actualizar la pantalla cada cierto tiempo (5 milisegundos en este caso). Además, el programa hace que el círculo rebote cuando alcanza uno de los bordes de la pantalla, cambiando su dirección de movimiento..
*/

let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgrey"
pincel.fillRect(0,0,600,400);


function disenarCircuferencias(x,y,radio){
    pincel.fillStyle = "blue";
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}

function limpiarPantalla(){
    pincel.clearRect(0,0,600,400);
}

let x = 0
let sentido = 1;
function actualizarPantalla(){
    limpiarPantalla();

    if( x>600){
        sentido= -1;
    }else if (x<0){
        sentido=1;
    }
    disenarCircuferencias(x,20,10)
    x = x + sentido;
}

setInterval(actualizarPantalla,5);



