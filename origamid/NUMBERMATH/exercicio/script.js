// Retorne um número aleatório
// entre 1050 e 2000
const numeroRandom = function () {
	return Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
}
console.log(numeroRandom());

// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
let numerosArray = numeros.split(', ');
numeros = [];

numerosArray.forEach(n => {
	numeros.push(parseInt(n));
});

const numeroMaximo = Math.max(...numeros);
console.log(...numeros);
console.log(numeroMaximo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230  ', 'r$  200'];

function limpaPrecos(array) {
	let arrayManipulada = [];
	array.forEach((preco) => {
		arrayManipulada.push(+preco.toUpperCase().replace('R$', '').trim().replace(',', '.'));
	});
	for(let i= 0;i<4; i++) arrayManipulada[i] = arrayManipulada[i].toFixed(2);
	return arrayManipulada;
};

function somaPrecos() {
	let totPrecos = 0;
	limpaPrecos(listaPrecos).forEach(preco => {
		totPrecos += +preco;
	});
	return totPrecos;
};

console.log(limpaPrecos(listaPrecos));
console.log(somaPrecos());