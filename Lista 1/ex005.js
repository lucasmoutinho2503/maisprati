/* 5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0. */

const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Nota da primeira avaliação: "));
let nota2 = parseFloat(prompt("Nota da segunda avaliação: "));

let mediaNota = (nota1 + nota2) / 2;

console.log(`Sua nota foi de ${mediaNota} na média.`);

if(mediaNota >= 6){
    console.log(`PARABÉNS! Você foi aprovado.`);
}else{
    console.log(`Você foi REPROVADO! Estude mais.`)
}
