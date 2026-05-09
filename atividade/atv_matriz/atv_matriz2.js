let linhas = 3;
let colunas =3;
let min = 1;
let max = 50;

function gerarMatrizAleatoria(linhas, colunas, min, max) {
    let matriz = [];

    for(let i = 0; i < linhas; i++){
        matriz[i] = [];

        for(let j = 0; j < colunas; j++){
            matriz[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    return matriz
}
console.log(matrizgerarMatrizAleatoria(linhas, colunas, min, max));