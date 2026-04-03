const prompt = require('prompt-sync')();
let totalPerguntas = 5
const respostasNome = [];


    for (let i = 0; i < totalPerguntas; i++) {
        perguntasNome = prompt(`Digite seu nome ${i + 1}:`);
        respostasNome.push(perguntasNome);
        
    }
    console.log(respostasNome)


    