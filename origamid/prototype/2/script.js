const lista = document.querySelectorAll('li');
const listaArray = Array.prototype.slice.call(lista);

let nome = 'Filipe';
let teste = String.prototype.toUpperCase.call(nome);

function ok(){
	return 'teste';
}