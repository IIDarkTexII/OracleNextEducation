/*Este programa es una aplicación que dibuja círculos en una pantalla (canvas) 
en la posición en la que se hace clic con el ratón. Si se hace clic con el botón derecho del ratón en lugar de 
con el izquierdo, se altera el color del círculo que se dibujará en la próxima vez que se haga clic con el botón
izquierdo. El programa permite elegir entre tres colores: azul, rojo y verde.*/

let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "grey"
pincel.fillRect(0,0,600,400);

let colores = ["blue", "red" , "green"];
let colorActual = 0;


function exhibirAlerta(evento){

    let x = evento.pageX - pantalla.offsetLeft;
    let y = evento.pageY - pantalla.offsetTop;
    console.log(evento);
    alert(x + " , " + y);
}

function dibujarCirculo(evento){

    let x = evento.pageX - pantalla.offsetLeft;
    let y = evento.pageY - pantalla.offsetTop;

    pincel.fillStyle = colores[colorActual];
    pincel.beginPath();
    pincel.arc(x,y,10,0,2*3.14);
    pincel.fill();

    console.log(x + " , " + y);
}
pantalla.onclick = dibujarCirculo;

function alterarColor() {
    colorActual++;
    if(colorActual>= colores.length){
        colorActual = 0;
    }
    return false;
}


//pantalla.onclick = exhibirAlerta;
pantalla.oncontextmenu = alterarColor;

