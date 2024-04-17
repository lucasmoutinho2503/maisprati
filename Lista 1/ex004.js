/* 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação). */

const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Nota da primeira avaliação: "));
let nota2 = parseFloat(prompt("Nota da segunda avaliação: "));

let mediaNota = (nota1 + nota2) / 2;

console.log(`Sua nota foi de ${mediaNota} na média.`);

if(mediaNota >= 6){
    console.log(`PARABÉNS! Você foi aprovado.`);
}
