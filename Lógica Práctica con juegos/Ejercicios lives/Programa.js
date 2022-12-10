let pantalla = document.querySelector("canvas");
let pincel= pantalla.getContext("2d");

pincel.fillStyle = "#E1F2FE"; //propiedad
pincel.fillRect(0,0,600,400); //funcions

pincel.fillStyle = "#7CFC00";
pincel.fillRect(0,0,200,400);

pincel.fillStyle = "#FF0000";
pincel.fillRect(400,0,200,400);

pincel.fillStyle = "yellow";
pincel.beginPath();
pincel.moveTo(300,200);
pincel.lineTo(200,400);
pincel.lineTo(400,400);
pincel.fill();

pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300,200,50,0, 2*3.14);
pincel.fill();