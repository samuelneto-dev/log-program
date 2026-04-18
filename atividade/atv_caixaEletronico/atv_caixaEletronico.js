const prompt = require('prompt-sync')();

let saldo = 1000;
let depositar = [];
let sacar = [];
let opcao = '';

while (opcao !== '5') {
    console.log('\n======== MENU ========');
    console.log('1. Consultar saldo');
    console.log('2. Depositar');
    console.log('3. Sacar');
    console.log('4. Ver extrato');
    console.log('5. Sair');

    opcao = prompt('Opção: ');

    if (opcao === '1') {
        console.log('\n----- SALDO -----');
        console.log(`R$: ${saldo.toFixed(2)}`);

        if (saldo === 0) {
            console.log("\n-- Saldo inexistente --");
        }

    } else if (opcao === '2') {
        let entrarDinheiro = Number(prompt("Valor que será depositado: R$ "));

        if (entrarDinheiro > 0) {
            saldo += entrarDinheiro; 
            depositar.push(entrarDinheiro);

            console.log(`Saldo atual R$${saldo.toFixed(2)}`);
        } else {
            console.log("Valor inválido!");
        }

    } else if (opcao === '3'){
        let sairDinheiro = Number(prompt("Valor que será retirado: R$ "));

        if (sairDinheiro > 0) {
            saldo -= sairDinheiro; 
            sacar.push(sairDinheiro);

            console.log(`Saldo retirado R$${sacar}`);
            console.log(`Saldo atual R$ ${saldo}`)
        }

    } else if (opcao === '4'){

        if(depositar === 0 && sacar === 0){
            console.log("Nenhuma movimentação realizada");
        
        }else{
            console.log(`Valor que foi colocado R$ ${depositar}`);
            console.log(`Valor que foi retirado R$ ${sacar}`);
            console.log(`Saldo atual R$ ${saldo}`);
        }
        } else if (opcao === '5'){
        console.log("Sair...");
        break;
        }
}
