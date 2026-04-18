const prompt = require('prompt-sync')();

let inter1 = 0;
let inter2 = 0;
let inter3 = 0;
let inter4 = 0;

while(true){
    let num = parseInt(prompt("Digite um n°(negativo para sair):"));
    if(num < 0){
        break;
    }

    if(num <= 25){
    inter1++;
    
} else if(num <= 50){
    inter2++;

} else if(num <= 75){
    inter3++;

} else if(num <= 100){
    inter4++;
}
}
console.log("Quantidade de intervalos", inter1);
console.log("Quantidade de intervalos", inter2);
console.log("Quantidade de intervalos", inter3);
console.log("Quantidade de intervalos", inter4);
