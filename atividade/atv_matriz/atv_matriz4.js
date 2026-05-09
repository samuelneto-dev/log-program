let linhas = 3;
let colunas =3;
let min = 1;
let max = 50;
let matriz = [];


function gerarMatrizAleatoria(linhas, colunas, min, max) {

    for(let i = 0; i < linhas; i++){
        matriz[i] = [];

        for(let j = 0; j < colunas; j++){
            matriz[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
    return matriz
}
console.log(gerarMatrizAleatoria(linhas, colunas, min, max));

let somaDiagonal = 0;

for(let i = 0; i < matriz.length; i++) {
    somaDiagonal += matriz[i][i];
    console.log("Diagonal ["+i+"]["+i+"]: "
        + matriz[i][i]
    );
}
console.log("Soma:" + somaDiagonal);