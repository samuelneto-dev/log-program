const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Numero 1: ", function(n1){
    rl.question("Operação: ", function(n2){
        rl.question("Numero 2: ", function(n3){

            let numero1 = Number(n1);
            let numero2 = Number(n3);
            let operacao = n2;

            if(operacao === "+"){
                console.log("Resultado:", numero1 + numero2); 
            }else if(operacao === "-"){
                console.log("Resultado:", numero1 - numero2); 
            }else if(operacao === "*"){
                console.log("Resultado:", numero1 * numero2); 
            }else if(operacao === "/"){
                console.log("Resultado:", numero1 / numero2); 
            }else{
                console.log(" :( ");
            }
        rl.close();
        });
    });
});