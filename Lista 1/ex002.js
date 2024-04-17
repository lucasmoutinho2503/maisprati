/* 2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores. */

const prompt = require('prompt-sync')();

let quantidadeEleitores = parseInt(prompt("Quantidade de eleitores: "));
let votosValidos = parseInt(prompt("Quantidade de votos validos: "));
let votosNulos = parseInt(prompt("Quantidade de votos anulados: "));
let votosBrancos = parseInt(prompt("Quantidade de votos em branco: "));

let percentualBrancos = (votosBrancos * 100) / quantidadeEleitores;
let percentualNulos = (votosNulos * 100) / quantidadeEleitores;
let percentualValidos = (votosValidos * 100) / quantidadeEleitores;

console.log(`Votos Validos: ${percentualValidos}%`);
console.log(`Votos Anulados: ${percentualNulos}%`);
console.log(`Votos em Branco: ${percentualBrancos}%`);