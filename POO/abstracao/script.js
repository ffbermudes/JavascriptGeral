// Definindo a classe Animal
class Animal {
	constructor(nome, especie, idade) {
		this.nome = nome;
		this.especie = especie;
		this.idade = idade;
	}

	fazerBarulho() {
		console.log("O animal faz barulho");
	}

	mover() {
		console.log("O animal se move");
	}
}

// Criando um objeto da classe Animal
const gato = new Animal("Rex", "gato", 3);
const leao = new Animal("Rei Leao", "leao", 5);

// Chamando métodos do objeto
gato.fazerBarulho(); // Output: "O animal faz barulho"
gato.mover(); // Output: "O animal se move"
console.log(gato);