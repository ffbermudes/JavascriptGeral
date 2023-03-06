// Transforme o objeto abaixo em uma Constructor Function
function pessoa(nome, idade) {
	this.nome = nome;
	this.idade = idade;
	this.andar = function () {
		console.log(this.nome + ' andou');
	};
};

/* Crie 3 pessoas, João - 20 anos,
 Maria - 25 anos, Bruno - 15 anos*/
const joão = new pessoa('joão', 20);
const Maria = new pessoa('Maria', 25);
const Bruno = new pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){
	this.elements =	document.querySelectorAll(seletor);
	this.addClass = (nameClass)=>{
		this.elements.forEach(h1=>{
			h1.classList.add(nameClass);
		});
	};
	this.removeClass = (nameClass)=>{
		this.elements.forEach(h1=>{
			h1.classList.remove(nameClass);
		});
	};
};

const allH1 = new Dom('h1');