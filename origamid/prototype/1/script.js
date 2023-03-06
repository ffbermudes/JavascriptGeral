//Resumindo explicação:
//Essa é uma função construtora e ela vai servir para construir um objeto.
function Pessoa(nome, idade) {
	this.nomeCompleto = nome;
	this.idade = idade;
};

//Criando objeto com a função construtora.
const filipe = new Pessoa('Filipe Freitas Bermudes', 29);

//Criando novo método para a função construtora.
Pessoa.prototype.novoMetodo = function(){
	return `${this.nomeCompleto} possuí ${this.idade} anos.`;
};

//Mesmo que o novo método seja feito depois utilizando prototype meu objeto vai puxar esse novo método.
console.log(filipe.novoMetodo());

//Utilizando prototype.
	//Object.prototype
	//Array.prototype
	//Number.prototype
	//Date.prototype

//Exemplo de prototype.	 Não execute a função construtora com ().
console.log(Date.prototype);	//Assim eu analiso o construtor.

//Utilizando __proto__	Ver qual construtor determinado objeto foi construído.
console.log(filipe.__proto__);//Bom para ver os métodos e propriedades desse tipo da variável.