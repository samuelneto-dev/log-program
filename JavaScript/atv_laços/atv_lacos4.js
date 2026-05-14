
let i = 11, somaMultiplos6 = 0, qtddMultiplos6 = 0;
while(i <= 210){
    if(i % 6 ===0){
        console.log(i, " ");
        somaMultiplos6 = somaMultiplos6 + i;
        qtddMultiplos6++;
    }
    i++;
}
console.log("Media: ", somaMultiplos6 / qtddMultiplos6);