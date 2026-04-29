function execution(numero){
    let visor = document.getElementById("visor");
    visor.value += numero;
}

function limpar(){
    let visor = document.getElementById("visor");
    visor.value = "";
}

function incremento(numero){
    let visor = document.getelementById("visor");
    visor.value = '++',numero;
}

function subtração(numero){
    let visor = document.getElementById("visor");
    visor.value = "-",numero;
}

function divisão(numero){
    let visor = document.getElementById("visor");
    visor.value = "/",numero;
}

function mulitplicação(numero){
    let visor = document.getElementById("visor");
    visor.value = "*",numero;
}