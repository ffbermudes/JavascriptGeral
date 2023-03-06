const notAnumber = NaN;
const numeros = 123.456;
const letras = 'asd';
const preco = 2.99;

console.log(Number.isNaN(notAnumber));

console.log(Number.isInteger(numeros));

console.log(Number.parseFloat('100 reias'));
console.log(Number.parseFloat('R$ 100'));

console.log(parseInt(numeros));

//Arredonda pra cima.
console.log(preco.toFixed());
console.log(preco2.toFixed(2));

//Arredonda pra cima o próprio número.
console.log((99.99).toFixed());

//Transforma o número em formato real.
const preco2 = 1489.2232
console.log(preco2.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

//Arredonda pra cima ou pra baixo.
console.log(Math.ceil(2.9));
console.log(Math.floor(2.9));

//Seleciona o maior número
const numero001 = 32;
const numero02 = 55;

//Número máximo entre os inseridos nos parâmetros da função.
console.log(Math.max(numero001, numero02));

//Números aleaórios
numAleatorio = Math.random() * 5;
	//Arredonda
		console.log(Math.floor(numAleatorio));
	//Forma de manipular bem o sorteio. Math.floor(Math.random() * (max - min + 1)) + min;
		console.log(Math.floor(Math.random() * 20) + 20);