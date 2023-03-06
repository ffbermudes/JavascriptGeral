// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoas(nome, sobrenome, idade){
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
};

Pessoas.prototype.fullName = function() {
	return `${this.nome} ${this.sobrenome} possuí ${this.idade} anos.`;
}

const filipe = new Pessoas('Filipe', 'Freitas Bermudes', 29);

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

//	item//	lenght//	namedItem//	entries //	keys //	forEach //	values

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; // Function
li.innerText; //String
li.value; //Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String