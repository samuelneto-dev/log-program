let energia = [40, 45, 50, 52, 56, 58, 60]
let soma = 0

for (let i = 0; i < energia.length ; i++)  {
    soma += energia[i];
    console.log(energia[i]) ;

    if(energia[i] > 50 && energia[i] < 58){
        console.log("Consumo alto");
    }
    if(energia[i] > 58){
        console.log("Consumo critico");
    }

    }
    let media = soma / energia.length
    console.log("Media", media.toFixed(2));
