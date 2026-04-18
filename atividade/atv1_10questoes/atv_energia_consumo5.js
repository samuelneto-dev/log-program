const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite consume de Kwh:", function(n1){
    let consumoKwh = Number(n1)
    let valorKwh = 0

    if(consumoKwh <= 100){
        valorTotal = consumoKwh * 0.60;
    }else if (consumoKwh <= 200) {
        valorTotal = consumoKwh * 0.75;
    }else {
        valorTotal = consumoKwh * 0.90;
    }   


    console.log(`Consumo: ${consumoKwh} kWh`);
    console.log(`Valor total da conta: R$ ${valorTotal.toFixed(2)}`);

    rl.close();
    });



