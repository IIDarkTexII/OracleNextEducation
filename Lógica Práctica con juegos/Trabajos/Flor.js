
let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function dibujarCirculo(x, y, radio, color) {

    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2*3.14);
    pincel.fill();
}
function dibujarFlor(x,y){
    dibujarCirculo(x,y,10,"red");
    dibujarCirculo(x,y-20,10,"yellow");
    dibujarCirculo(x,y+20,10,"blue");
    dibujarCirculo(x+20,y,10,"black");
    dibujarCirculo(x-20,y,10,"orange");
}

dibujarFlor(300,200);
dibujarFlor(400,300);