const prompt = require('prompt-sync')();

function eprimo(num) {
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true
}

function mostrarResultado(num) {
    if (eprimo(num)) {
        console.log(`${num} é um numero primo`);
    }else{
        console.log(`${num} não é numero primo`);
    }
}
let numero = Number(prompt("Digite um numero: "));
mostrarResultado(numero);