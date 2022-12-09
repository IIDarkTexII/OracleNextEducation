//let secreto = Math.round(Math.random()*10);

function aleatorio(){
    return Math.round(Math.random()*10);
}

function sortearNumeros(cantidad){
    let contador = 1;
    let secreto = [];
    while(contador<=cantidad){
        let numeroAleatorio = aleatorio();
        console.log(numeroAleatorio);
        let encontrado= false;
        if(numeroAleatorio!=0){
            for(let posicion = 0; posicion<secreto.length;posicion++){
                if(numeroAleatorio==secreto[posicion]){
                    encontrado = true;
                    break;
                }
            }
    
            if(encontrado==false){
                secreto.push(numeroAleatorio);
                contador ++;
            }
        }
    }
    return secreto
}


let secreto = sortearNumeros(4);
console.log(secreto);
let input = document.querySelector("input");
input.focus();

function verificar(){
    let encontrar = false;
    for(let posicion = 0;posicion < secreto.length; posicion++){
        if(parseInt(input.value)==secreto[posicion]){
            alert("Le atinó");
            encontrar = true;
            break;
        }
    }

    if(encontrar==false){
        alert("No le atinó");
    }

    input.value = ""; 
    input.focus();
}

let button = document.querySelector("button");
button.onclick = verificar;