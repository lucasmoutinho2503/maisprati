/* 15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos. */

const prompt = require("prompt-sync")();

let notas = 1;
let peso = 1;
let soma = 0;
let media = 0;

//truthy of falsy
while (notas && peso) {
	notas = parseFloat(prompt("Digite um numero decimal: "));
	peso = parseFloat(prompt("Digite o peso do número: "));

	soma += peso;
	media += notas *peso;
}

media /= soma;

console.log(media);