function Pessoa(nome, idade){
	this.name = nome;
	this.age = idade;
	this.idadeNome = function(){
		return `${this.name} tem 29 anos`;
	}
};

const pessoa1 = new Pessoa('Filipe', 29);
const pessoa2 = new Pessoa('Cross', 27);