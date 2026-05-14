const prompt = require('prompt-sync')();

// Função para calcular altura do prédio
function calcularAltura(minhaSombra, minhaAltura, sombraPredio) {
    return (minhaAltura * sombraPredio) / minhaSombra;
}

function resultado() {
    let minhaSombra = Number(prompt("Digite o tamanho da sua sombra: "));
    let minhaAltura = Number(prompt("Digite a sua altura: "));
    let sombraPredio = Number(prompt("Digite o tamanho da sombra do prédio: "));

    let alturaPredio = calcularAltura(minhaSombra, minhaAltura, sombraPredio);

    console.log(`Altura do prédio: ${alturaPredio.toFixed(2)} metros`);
}

resultado();