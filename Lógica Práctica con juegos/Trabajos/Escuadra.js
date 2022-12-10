let pantalla = document.querySelector("canvas");
let pincel= pantalla.getContext("2d");

pincel.fillStyle = "black";
pincel.beginPath();
pincel.moveTo(50,0);
pincel.lineTo(50,400);
pincel.lineTo(600,400);
pincel.fill();

pincel.fillStyle = "white";
pincel.beginPath();
pincel.moveTo(100,100);
pincel.lineTo(100,350);
pincel.lineTo(500,365);
pincel.fill();