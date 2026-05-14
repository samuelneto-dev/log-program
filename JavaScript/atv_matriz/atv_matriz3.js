let matriz = [
    [10, 12, 31],
    [4, 5, 67],
    [1, 8, 15]
]
let somaDiagonal = 0;

for(let i = 0; i < matriz.length; i++) {
    somaDiagonal += matriz[i][i];
    console.log("Diagonal ["+i+"]["+i+"]: "
        + matriz[i][i]
    );
}
console.log("Soma:" + somaDiagonal);