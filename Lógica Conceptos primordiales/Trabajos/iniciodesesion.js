function imprimir(frase){
    document.write(frase)
    saltarLínea();
};

function saltarLínea(){
    document.write("<br> <br>")
};

let inicioDeSesionRegistrado = "alura";
let contrasenhaRegistrada = "alura321";

let intentos=3;
let contador=1;

while(contador<=intentos){
    let inicioDeSesionIngresado = prompt("Ingrese su usuario");
    let contrasenhaIngresada = prompt("Ingrese su contraseña");

    if( inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada ) {
        alert("Bienvenido al sistema " + inicioDeSesionIngresado);
        break;
    } else {
        alert("Inicio de sesión inválido " + contador + " de " + intentos + " realizados" );
        if(contador==3){
            alert("Agotaste los intentos, favor de comunicarse con el administrador");
        }
    }
    contador ++;
}

