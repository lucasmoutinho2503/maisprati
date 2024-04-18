/* 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require('prompt-sync')();

let n1 = prompt("Digite o primeiro número: ");
let n2 = prompt("Digite o segundo número: ");

if(n1 > n2){
    console.log(`${n2} ${n1}`);
}else{
    console.log(`${n1} ${n2}`);
}
