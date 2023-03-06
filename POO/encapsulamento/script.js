class Pessoa {
	constructor(name, age) {
		this.nome = name;
		this.idade = age;
	}
	#deficiente = false; //variável privada
	teste1 = 31; //variável publica
	getPrivateTeste(){ //variável protegida
		return this.#deficiente;
	};
	deficienteTrue(){
		this.#deficiente = true;
	}
};

const Isabel = new Pessoa('Isabel', 65);
const Filipe = new Pessoa('Filipe', 29);

Pessoa.prototype.nomeCompleto = function(){
	return`${this.nome} possui ${this.idade} anos. Variável ${this.getPrivateTeste()}`;
}

Isabel.deficienteTrue();
console.log(Isabel.getPrivateTeste());