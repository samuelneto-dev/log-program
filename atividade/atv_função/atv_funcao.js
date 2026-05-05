const prompt = require('prompt-sync')();

let nome = prompt("Digite o nome do aluno: ");
let anoNascimento = Number(prompt("Digite o ano de nascimento: "));
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));

function calcularIdade(anoNascimento){
    let anoAtual = 2026;
    let idade = anoAtual - anoNascimento;
    return idade;
}
function calcularMedia(nota1, nota2){
    let media = (nota1 + nota2)/2;
    return media;
}


let idadeAluno = calcularIdade(anoNascimento);
let mediaAluno = calcularMedia(nota1, nota2);

console.log("Nome: ", nome);
console.log("Idade: ", idadeAluno);
console.log("Média: ", mediaAluno);