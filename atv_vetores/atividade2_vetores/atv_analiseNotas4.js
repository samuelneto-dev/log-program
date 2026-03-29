let notas = [3, 5, 7, 8, 9]
let valor = 0
let maiorvalor = Math.max(...notas)

for(let i = 0; i < notas.length; i++) {
    valor += notas[i]

    if(notas[i] >= 7){
        console.log("Aporvados")
    }else{
        console.log("Reprovado")
    }
}
let media = valor / notas.length;

console.log("Media:",media);
console.log("Maior nota:", maiorvalor);
