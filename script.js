
function execution(numero){
    let visor = document.getElementById("visor");
    visor.value += numero;
}

function limpar(){
    let visor = document.getElementById("visor");
    visor.value = "";
}

function calcular(){
    let visor = document.getElementById("visor");
    visor.value = eval(visor.value);
}

function apagar(){
    let visor = document.getElementById("visor");
    visor.value = visor.value.slice(0,-1);
}