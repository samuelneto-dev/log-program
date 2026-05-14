//Função paraclea
const prompt = require('prompt-sync')();

function calcularSalarioBruto(hora, valorHora) {
    let salarioBruto = hora * valorHora;
    return salarioBruto;
}

function calcularSalarioLiquido(salarioBruto) {
    if (salarioBruto < 2000) {
        return salarioBruto + 200;
    } else {
        return salarioBruto;
    }
}

// Programa principal
let nome = prompt("Digite seu nome: ");
let hora = Number(prompt("Horas trabalhadas: "));
let valorHora = Number(prompt("Valor da hora: "));

let salarioBruto = calcularSalarioBruto(hora, valorHora);
let salarioLiquido = calcularSalarioLiquido(salarioBruto);

console.log(`Funcionario ${nome}`);
console.log(`Salario final R$${salarioLiquido.toFixed(2)}`);
