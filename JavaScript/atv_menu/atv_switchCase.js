const prompt = require('prompt-sync')();
let valores = [];
let opcao;

do {
    opcao = parseInt(prompt(
        "\n==== MENU: ====\n" +
        "1 - Digitar numeros\n" +
        "2 - Somar elementos\n" +
        "3 - Calcular média\n" +
        "4 - Maior e menor valor\n" +
        "5 - Buscar elemento\n" +
        "0 - Sair\n" +
        "Escolha uma opção:"
    ));

    switch (opcao) {
        case 1:
            valores = [];
            let tamanho = parseInt(prompt("Quantos valores deseja cadastrar?"));
            for (let i = 0; i < tamanho; i++) {
                let num = parseInt(prompt(`Digite o ${i + 1}º valor:`));
                valores.push(num);
            }
            console.log("Vetor:", valores);
            break;

        case 2:
            let soma = 0;

            for (let i = 0; i < valores.length; i++) {
                soma += valores[i];
            }
            console.log("Soma dos vetores:", soma);
            break;

        case 3:
            let somaMedia = 0;
            for (let i = 0; i < valores.length; i++) {
                somaMedia += valores[i];
            }
            if (valores.length > 0) {
                let media = somaMedia / valores.length;
                console.log("Média:", media);
            } else {
                console.log("Vetor vazio!");
            }
            break;

        case 4:
            if (valores.length > 0) {
                let maior = valores[0];
                let menor = valores[0];

                for (let i = 0; i < valores.length; i++) {
                    if (valores[i] > maior) {
                        maior = valores[i];
                    }
                    if (valores[i] < menor) {
                        menor = valores[i];
                    }
                }
                console.log("Maior valor:", maior);
                console.log("Menor valor:", menor);
            } else {
                console.log("Vetor vazio!");
            }
            break;

        case 5:
            let busca = parseInt(prompt("Digite o valor para buscar:"));

            for (let i = 0; i < valores.length; i++) {
                if (valores[i] === busca) {
                    console.log(`Valor ${busca} encontrado na posição ${i}`);

                }
            }
            break;

        case 0:
            console.log("Saindo");
            break;

        default:
            console.log("Opção inválida");
    }
} while (opcao !== 0);