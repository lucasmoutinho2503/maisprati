/* 9. Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo: 
1 - Sul    5 ou 6 - Nordeste
2 - Norte  7, 8 ou 9 - Sudeste
3 - Leste  10 até 20 - Centro-Oeste
4 - Oeste  25 até 50 - Nordeste 
Fora dos Intervalos - Produto Importado*/

const prompt = require('prompt-sync')();

let codigoProduto = parseInt(prompt("Digite o código de origem do produto: "));

if(codigoProduto == 5 || codigoProduto == 6){
    codigoProduto = 5;
}

if(codigoProduto == 7 || codigoProduto == 8 || codigoProduto == 9){
    codigoProduto = 6;
}

if(10 <= codigoProduto && codigoProduto <=20){
    codigoProduto = 7;
}

if(25 <= codigoProduto && codigoProduto <=50){
    codigoProduto = 8;
}

switch (codigoProduto){
    case 1:
        regiao = "Região Sul";
    break;

    case 2:
        regiao = "Região Norte";
    break;

    case 3:
        regiao = "Região Leste";
    break;

    case 4:
        regiao = "Região Oeste";
    break;

    case 5:
        regiao = "Região Nordeste";
    break;

    case 6:
        regiao = "Região Sudeste";
    break;

    case 7:
        regiao = "Região Centro-Oeste";
    break;

    case 8:
        regiao = "Região Nordeste";
    break;

    default:
        regiao = "Produto importado";
}

console.log(`${regiao}`);