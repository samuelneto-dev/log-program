// Crie um vetor com as vendas diárias de uma loja durante uma semana.
let vendas = [50, 180, 600, 20, 100, 200, 80];
let valorTotal = 0
let maiorvalor = Math.max(...vendas)
let dias = vendas.length

for (let i = 0; i < vendas.length; i++) {
    valorTotal += vendas[i];
    
if(vendas[i] >= 100){
    console.log("Vendas maiores que 100:", vendas[i])
}


}
let mediavendas = valorTotal / dias;


console.log("Calculo total vendido", valorTotal);
console.log("Maior numero:", maiorvalor)
console.log("Media de dias:", mediavendas.toFixed(2));