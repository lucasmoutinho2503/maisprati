/* 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo. */


let i = 0;
let num = 101;

while (i <= 50) {
	let primo = true;
	let i = 2;

	while (i * i <= num) {
		if (num % i === 0) {
			primo = false;
			break;
		}
		i++;
	}

	if (primo) {
		console.log(num);
		i++;
	}
	num++;
}

