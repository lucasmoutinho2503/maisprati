/* 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO. */

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número: "));

let calculo = numero % 2;

if(calculo == 0){
    console.log(`${numero} é um número PAR!`);
}else if(calculo == 1){
    console.log(`${numero} é um número IMPAR!`);
}else{
    console.log("FIM");
}