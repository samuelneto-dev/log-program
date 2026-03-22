const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite a idade:", function(input){
    let idade = Number(input)
    let maioridade = 18

    if(idade >= maioridade){
        console.log("Maior idade confirmada")
    }else{
        console.log("Criança")
    }

rl.close();
});