// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
let pessoa = {
	nome: 'Filipe Freitas',
	sobrenome: 'Bermudes',
	tel: '27 99764-8053',
}

pessoa.nomeCompleto = function () {
	return `${this.nome} ${this.sobrenome}`;
}

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(pessoa.nomeCompleto());

// Modifique o valor da propriedade preco para 3000

var carro = {
	preco: 1000,
	portas: 4,
	marca: 'Audi',
}

console.log(carro.preco + ' antes');
carro.preco = '3000';
console.log(carro.preco + ' depois');
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cpessoa = 'homem';
let cachorro = {
	raça: 'labrador',
	idade: 10,
	latir() {
		if (cpessoa == 'homem') {
			return 'Latir!';
		} else {
			return 'fazer nada';
		}
	}
};

console.log(cachorro.latir());

cachorro.racaIdade = function () {
	return `A raça do cachorro é ${this.raça} e está com ${this.idade} anos de idade.`
};

console.log(cachorro.racaIdade());