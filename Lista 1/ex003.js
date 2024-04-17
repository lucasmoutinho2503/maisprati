/* 3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros. */

const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let n2 = parseInt(prompt("Digite o segundo número inteiro: "));
let n3 = parseInt(prompt("Digite o terceiro número inteiro: "));
let n4 = parseInt(prompt("Digite o quarto número inteiro: "));

let operacao1 = n1 + 25;
let operacao2 = n2 * 3;
let operacao3 = (n3 * 12) / 100;
let operacao4 = n1 + n2 + n3;

console.log(`Operação Um: ${operacao1}`)
console.log(`Operação Dois: ${operacao2}`)
console.log(`Operação Três: ${operacao3}`)
console.log(`Operação Quatro: ${operacao4}`)
