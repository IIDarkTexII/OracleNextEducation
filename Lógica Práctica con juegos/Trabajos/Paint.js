
let pantalla = document.querySelector('canvas');
let pincel = pantalla.getContext('2d');

pincel.fillStyle = 'lightgrey';
pincel.fillRect(0, 0, 600, 400);

let puedoDibujar = false;

let xRojo=0;
let xVerde= 50;
let xAzul = 100;
let yCuadrados=0;
let tamanoCuadrados= 50;
let colorActual = "blue";

function dibujarCirculo(x,y,colorActual) {
    if(puedoDibujar) {
        pincel.fillStyle = colorActual;
        pincel.beginPath();
        pincel.arc(x, y, 5, 0, 2 * 3.14);
        pincel.fill();
    }
}

function dibujarCuadrado(x, y, tamanho, color) {

    pincel.fillStyle = color;
    pincel.fillRect(x, y, tamanho, tamanho);
    pincel.fill();

}

function dibujarPaletaColores() {

    dibujarCuadrado(xRojo, yCuadrados, tamanoCuadrados, 'red');
    dibujarCuadrado(xVerde, yCuadrados, tamanoCuadrados, 'green');
    dibujarCuadrado(xAzul, yCuadrados, tamanoCuadrados, 'blue');

}

pantalla.onmousemove = dibujarCirculo;

function habilitarDibujar() {
    puedoDibujar = true;
}

function deshabilitarDibujar() {
    puedoDibujar = false;
}

function puedeDisenharArea(xCoordenada,yCoordenada){
    if (xCoordenada >= 0 && (xCoordenada < (3*tamanoCuadrados+5)) && 
        (yCoordenada >=0 && yCoordenada < (tamanoCuadrados+5))) {
        return false;
    } else{
        return true;
    }

}    

function capturarMovimientoDelMouse(evento){
    let x = evento.pageX - pantalla.offsetLeft;
    let y = evento.pageY - pantalla.offsetTop;
    if (puedeDisenharArea(x,y)){
            dibujarCirculo(x,y,colorActual);
    }
}

function seleccionarColor(evento) {

    let x = evento.pageX - pantalla.offsetLeft;
    let y = evento.pageY - pantalla.offsetTop;
    if (y > yCuadrados && y < (yCuadrados + tamanoCuadrados)) {

        if(x > xRojo && x < (xRojo + tamanoCuadrados)) {

            colorActual = "red";
            console.log(colorActual);

        } else if (x > xVerde && x < (xVerde + tamanoCuadrados)) {

            colorActual = "green";

        } else if(x > xAzul && x < (xAzul + tamanoCuadrados)) {

            colorActual = "blue";

        }            


    }


}


pantalla.onmousemove = capturarMovimientoDelMouse;
pantalla.onmousedown = habilitarDibujar;
pantalla.onmouseup = deshabilitarDibujar;

dibujarPaletaColores()

pantalla.onclick = seleccionarColor;


