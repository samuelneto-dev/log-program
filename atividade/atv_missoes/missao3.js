const prompt = require('prompt-sync')();
let notas;
const registros = [];
let totalAluno = 3

    for (let p = 0; p < totalAluno; p++) {
        let nome = prompt(`Nome do aluno ${p + 1}: `);
    let nota = Number(prompt(`Nota do aluno ${p + 1}: `));

    if(nota >= 7){
        console.log("Aprovado")
    }else{
        console.log("Reprovado")
    }
    
    registros.push({ nome: nome, nota: nota });
    }
    console.log(registros);
