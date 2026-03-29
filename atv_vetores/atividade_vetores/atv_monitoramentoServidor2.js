let temp = [80, 60, 70, 90, 68, 67]
let valor = 0
let mediaCalor = temp.filter(temp => temp >= 80)


for(let i = 0; i < temp.length; i++) {
    valor += temp[i];

if(temp[i] >= 90){
        console.log("alerta critico de quantas vezes passou de 90:", temp[i])
    }
}
let mediaTemperatura = valor/temp.length


console.log("Quantas vezes passou de 80:",mediaCalor );
console.log("Media de temperatura", mediaTemperatura);
