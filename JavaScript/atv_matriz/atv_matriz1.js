let matriz = [];
let linhas = 3;
let colunas = 3;
let contador = 1;

for(i = 0; 1 < linhas; i++) {
    matriz[i] = [];

    for(j = 0; j < colunas; j++) {
    matriz[i][j] = contador;
    contador++;
    }
}
console.log(matriz);