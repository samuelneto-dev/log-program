const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor da compra:", function(input){
    let valorCompra = Number(input);
    let desconto = 0;

    if (valorCompra < 100) {
        deconto = 0
    }else if (valorCompra >= 100 && valorCompra <= 299.99){
        desconto = valorCompra * 0.05;
    }else if (valorCompra >= 300 && valorCompra <= 499.99){
        desconto = valorCompra *0.10;
    }else{
        desconto = valorCompra * 0.15;
    }

    let valorTotal = valorCompra - desconto

    console.log("\n--- Resultado ---");
    console.log(`Valor da compra: R$ ${valorCompra.toFixed(2)}`);
    console.log(`Desconto aplicado: R$ ${desconto.toFixed(2)}`);
    console.log(`Total a pagar: R$ ${valorTotal.toFixed(2)}`);

    rl.close();
});