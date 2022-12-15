let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "lightgrey"
pincel.fillRect(0,0,600,400);

let radio = 10;
let xAleatorio;
let yAleatorio;


function disenarCircuferencias(x,y,radio,color){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}

function limpiarPantalla(){
    pincel.clearRect(0,0,600,400);
}

let x = 0

function diseñarObjetivo(x,y){
    disenarCircuferencias(x,y,radio + 20,"red");
    disenarCircuferencias(x,y,radio+10,"white");
    disenarCircuferencias(x,y,radio,"red");

}

function sortearPosicion(maximo){
    return Math.floor(Math.random()*maximo);
}

function actualizarPantalla(){
    limpiarPantalla();
    xAleatorio= sortearPosicion(600);
    yAleatorio=sortearPosicion(400);
    diseñarObjetivo(xAleatorio,yAleatorio);
    x ++;
}

setInterval(actualizarPantalla,500);

function disparar(evento){
    let x = evento.pageX-pantalla.offsetLeft;
    let y = evento.pageY - pantalla.offsetTop;
    if((x<xAleatorio + radio)&&(x>xAleatorio-radio)&&(y<yAleatorio+radio)&&(y>yAleatorio-radio)){
        alert("Tiro certero")
    }
}

pantalla.onclick = disparar;