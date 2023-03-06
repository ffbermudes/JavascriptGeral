const frase = 'A melhor linguagem é';
const linguagem = ' Javascript';
const arrayPrecos = ['R$ 90', 'R$ 68', 'R$ 199', 'R$ 300']

console.log(frase.charAt(12));

const junta = frase.concat(linguagem, ' !');
console.log(junta);

console.log(frase.includes('g'));

console.log(linguagem.endsWith('pt'));

console.log(frase.slice(0, 3)); //ou substring

console.log(linguagem.lastIndexOf('a'));
console.log(linguagem.indexOf('a'));

console.log(arrayPrecos[0].padStart(10, '-'));

arrayPrecos.forEach(preco=>{
	console.log(preco.padStart(10, '-'))
});

console.log(frase.repeat(2));

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const addListaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(addListaItens);


let preco = 'R$ 1200,43';
preco = preco.replace(',', '.'); // 'R$ 1200.43'

const arrayLista = addListaItens.split(', ');
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlJoin = htmlArray.join('section');

frutasArray = ['Banana', 'Melancia', 'Laranja'];

let trimTeste = '   valor   ';
trimTeste.trim();