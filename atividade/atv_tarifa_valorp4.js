const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("valor da compra: ", function(n1){
    rl.question("bairro: ", function(n2){

        let numero1 = Number(n1);
        let fretes = {
            centro: 5,
            brotas: 8,
            itapua: 12,
            outros: 15
        };
        let valorDoFrete = fretes[n2]|| fretes.outros

        if (numero1 >= 80) {
            console.log("Frete gratis");
        } else {
            console.log("frete:", numero1 + valorDoFrete);
        }

        rl.close();
    });
});