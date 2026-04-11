const prompt = require('prompt-sync')();

produto = [];
quantidade = [];
setor = [];
prazo = [];
opcao ='';

//Lista prazos
let inter1 = 0;
let inter2 = 0;
let inter3 = 0;
let inter4 = 0;

while (opcao !== '5') {
    console.log('\n======== MENU ========');
    console.log('1. Cadastrar produto');
    console.log('2. Listar pedidos');
    console.log('3. Resumo gerencial');
    console.log('4. Buscar pedido');
    console.log('5. Sair');

    opcao = prompt('Opção: ');

    if (opcao === '1') {
        let produtos = String(prompt('Produto: '));
        let quantidades = Number(prompt('Quantidade: '));
        let setores = String(prompt('Setor:'));
        let prazos = Number(prompt('Prazo:'));
        produto.push(produtos);
        quantidade.push(quantidades);
        setor.push(setores);
        prazo.push(prazos);

    }else if(opcao === '2'){
        console.log('Lista de pedidos:');
        for (let p = 0; p < produto.length; p++) {
            console.log(`${produto[p]} - Quantidade: ${quantidade[p]} - Setor: ${setor[p]} - Prazo: ${prazo[p]}`);
        }
    }
    else if(opcao === '3'){
        for (let p = 0; p < prazo.length; p++) {
            if(prazo[p] === 1){
                inter1++;
            }else if(prazo[p] === 2){
                inter2++;
            }else if(prazo[p] === 3){
                inter3++;
            }else if(prazo[p] === 4){
                inter4++;
            }
        }
        console.log(`Prazos: 1 dia: ${inter1} pedidos, 2 dias: ${inter2} pedidos, 3 dias: ${inter3} pedidos, 4 dias: ${inter4} pedidos`);
    }
}