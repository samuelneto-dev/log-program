const prompt = require('prompt-sync')();
let totalNumeros = 5;
const respostaNumero = [];

    for (let n = 0; n < totalNumeros; n++) {
    perguntasNumero = prompt(`Digite o numero ${n + 1}:`);
    respostaNumero.push(Number(perguntasNumero));

    }
  
    console.log(respostaNumero)