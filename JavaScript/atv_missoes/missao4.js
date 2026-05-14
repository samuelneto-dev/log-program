const prompt = require('prompt-sync')();

let nomes = [];
let notas = [];
let opcao = '';

while (opcao !== '3') {
    console.log('\n======== MENU ========');
    console.log('1. Cadastrar aluno');
    console.log('2. Listar alunos');
    console.log('3. Sair');

    opcao = prompt('Opção: ');

    if (opcao === '1') {
        let nome = prompt('Nome do aluno: ');
        let nota = Number(prompt('Nota do aluno: '));
        nomes.push(nome);
        notas.push(nota);
    } 
    
    else if (opcao === '2') {
        console.log('Lista de alunos:');
        for (let p = 0; p < nomes.length; p++) {
            console.log(`${nomes[p]} - Nota: ${notas[p]} - ${notas[p] >=7 ? 'Aprovado' : 'Reprovado'}`);
        }
    } 
    
    else if (opcao === '3') {
        console.log('Sair');
        break;
    } 
    
    else {
        console.log(':(')
    }
}