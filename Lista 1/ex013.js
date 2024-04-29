/* 13. Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N */

const prompt = require('prompt-sync')();

let num = parseInt(prompt("Informe um número: "))

let i = 1;

while(i <= 5){
    let multip = i * num;
    console.log(`${i} x ${num} = ${multip}`);
	i++;
}