//Classe Pai de cachorro e de outros tipos de animais que podem surgir.
class Animal{
	constructor(nome, idade) {
		this.name = nome;
		this.age = idade;
	};
};

//Classe filha da animal.
class Cachorro extends Animal{
	constructor(nome, idade){
		super(nome, idade);
		this.sound = ()=>`${this.name} Late!`;
	};
};

const tete = new Cachorro('Maria Tereza', 17);
const lisa = new Cachorro('Lisa', 6);