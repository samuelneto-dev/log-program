const prompt = require('prompt-sync')();

produto = [];
quantidade = [];
setor = [];
prazo = [];
opcao ='';
prioridade = '';

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
    }else if(opcao === '3'){
       
        for (let p = 0; p < prazo.length; p++) {
            if(prazo[p] <=2){
                
                  prioridade = "Urgente";
            }else if(prazo[p] >= 3 && prazo[p] <= 5){
              
                 prioridade = "Alta";
            }else if(prazo[p] >= 6 && prazo[p] <= 10){
               
                 prioridade = "Média";
            }else if(prazo[p] > 10){
               
                 prioridade = "Baixa";
            }
            console.log(`${prioridade} - ${produto[p]} - Quantidade: ${quantidade[p]} - Setor: ${setor[p]} - Prazo: ${prazo[p]}`);
            }
        }else if (opcao === '4') {
        let busca = prompt('Qual produto deseja buscar? ');
        let existe = false;
        
     console.log('\n--- Resultado da Busca ---');
   
        for (let i = 0; i < produto.length; i++) {
            if (busca.toLowerCase() === produto[i].toLowerCase()) {
                console.log(`${prioridade} - ${produto[i]} - Quantidade: ${quantidade[i]} - Setor: ${setor[i]} - Prazo: ${prazo[i]} dias`);
               
            }
          
        }
    }else if(opcao == '5'){
        console.log("\n---- Resumo ----")
            for (let a = 0; a < produto.length; a++) {
            console.log(`${prioridade} - ${produto[a]} - Quantidade: ${quantidade[a]} - Setor: ${setor[a]} - Prazo: ${prazo[a]}`);
        }
         console.log('\n=== Saindo ===');
     break;
    }

}