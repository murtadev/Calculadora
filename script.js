
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