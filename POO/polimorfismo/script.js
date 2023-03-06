class Animal {
	constructor(name) {
		this.name = name;
	}

	makeSound() {
		console.log("O animal faz algum som.");
	}
}

class Cat extends Animal {
	makeSound() {
		console.log("O gato mia.");
	}
}

class Dog extends Animal {
	makeSound() {
		console.log("O cachorro late.");
	}
}

// Cria um array de animais
const animals = [new Cat("Gato"), new Dog("Cachorro")];

// Itera sobre o array e chama o método makeSound para cada animal
animals.forEach((animal) => {
	animal.makeSound();
});