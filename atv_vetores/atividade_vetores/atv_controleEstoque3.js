let estoque = [ 0 , 2, 4, 5, 7, 13, 16, 20, 25, 30]
let valorTotal = 0
let reposicoes = 0

for(let i = 0; i < estoque.length; i++) {
    valorTotal += estoque[i];
    

   if(estoque[i] == 0){
    console.log("produto em falta:", estoque[i]);
   }
   if(estoque[i] <= 7){
    console.log("Estoque baixo: ", estoque[i]);
    reposicoes++;
   }

}

console.log("Numeros de reposição:", reposicoes);

