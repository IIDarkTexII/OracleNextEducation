let secreto = 5;
let input = document.querySelector("input");


function verificar(){
    if(parseInt(input.value)==secreto ){
        alert("Le atinó");
    }
    else{
        alert("No le atinó");
    }
}

let button = document.querySelector("button");
button.onclick = verificar;