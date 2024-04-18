/* 12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5. */

const prompt = require('prompt-sync')();

let numeroMin = 1000;
let numeroMax = 1999;

for(let i = 1000; i <= 1999; i++){
    
    let divisao = i % 11; 

    if(divisao == 5){
        console.log(i);
    }
}