/* 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */

const prompt = require('prompt-sync')();

let quantidadeMacas = prompt("Quantidade de maçãs compra: ");

if(quantidadeMacas >= 12){
    
    let valorMacas = quantidadeMacas * 0.25;

    console.log(`Você comprou ${quantidadeMacas} maçãs, elas custaram R$ ${valorMacas}.`);
}else{
    valorMacas = quantidadeMacas * 0.30;

    console.log(`Você comprou ${quantidadeMacas} maçãs, elas custaram R$ ${valorMacas}.`);
}