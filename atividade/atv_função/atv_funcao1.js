const prompt = require('prompt-sync')();

let numero = []

function verificarValor(numero){
    if (numero >= 0) {
        return true;
    }else{
        return false;
    }
}
let valor = parseInt(prompt("Digite um numero: "));
if (verificarValor(valor)){
    console.log("O valor é positivo.")
}else{
    console.log("O valor é negativo.");
}