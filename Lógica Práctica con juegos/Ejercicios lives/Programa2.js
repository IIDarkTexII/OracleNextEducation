function dibujarCuadrado(x,y,color){
    let pantalla = document.querySelector("canvas");
    let pincel= pantalla.getContext("2d");

    pincel.fillStyle = color; 
    pincel.fillRect(x,y,50,50);
    pincel.strokeStyle = "black";
    pincel.strokeRect(x,y,50,50);
}

let x = 0;
while(x < 600){
    dibujarCuadrado(x,0,"red");
    dibujarCuadrado(x,50,"yellow");
    dibujarCuadrado(x,100,"green");
    x= x+50;
}
/*
let y = 0;
while(y < 400){
    dibujarCuadrado(0,y,"green");
    y= y+50;
}

*/
