// VARIÁVEIS GLOBAIS
const campTexto = document.querySelector("input");
const btnAdd = document.getElementsByTagName("button")[0];
const lista = document.querySelector("select");
const btnFinalizar = document.getElementsByTagName("button")[1];
const campoResultados = document.querySelector("#respostas");

// EVENTOS DA PÁGINA
btnAdd.addEventListener("click", colocaLista);
btnFinalizar.addEventListener("click", callFuncsCalcMedia);



function guardaVar() {
	return Number(campTexto.value);
};

//Coloca dentro da lista os valores digitados.
function colocaLista() {
	limpaLista();
	let numCampo = guardaVar();
	let transArray = Array.from(lista);
	transArray.forEach((op, i) => {
		if (op.value == numCampo) {
			console.log(op.value);
			lista.removeChild(lista[i]);
			alert("NÚMERO JÁ INSERIDO")
		};
	});

	if (numCampo >= 1 && numCampo <= 100) {
		// CRIAR O ELEMENTO OPTION.
		let optionElement = document.createElement("option");
		// ARMAZENA O VALOR DENTRO DA TAG OPTION
		optionElement.innerHTML = numCampo;
		lista.appendChild(optionElement);
	} else alert("Digite um valor de 1 à 100");
	campTexto.value = '';
};

//Soma e insere o resultado no elemento de exibição de resultados.
function somarLista() {
	limpaLista();
	let transArray = Array.from(lista);
	let totLista = 0;

	// SOMA OS NÚMEROS DA LISTA.
	transArray.forEach((option) => {
		totLista += Number(option.value);
	});

	// CRIA E ADICIONA O ELEMENTO NA LISTA.
	let elementDiv = document.createElement("div");
	elementDiv.classList.add("divResposta");
	elementDiv.innerHTML = 'Total: ' + Number(totLista);
	campoResultados.appendChild(elementDiv);

	return totLista;
}

//Quantidade de números cadastrados.
function totNumbers() {
	let totNum = lista.length;
	const elementDiv = document.createElement("div");
	elementDiv.classList.add("divResposta");
	elementDiv.innerHTML = "Temos " + totNum + " cadastrados.";
	campoResultados.appendChild(elementDiv);
	return totNum;
};

//Limpar campo de resultados.
function limpaLista() {
	while (campoResultados.children.length > 0) {
		for (let i = 0; i < campoResultados.children.length; i++) {
			campoResultados.children[i].remove();
		};
	};
};

//Menor valor da lista.
function menorValor() {
	const listaArray = Array.from(lista);
	let conferidor;
	//Avalia menor valor da lista.
	listaArray.forEach((op, i) => {
		if (i === 0)
			conferidor = Number(op.innerText);
		else if (conferidor > Number(op.innerText))
			conferidor = Number(op.innerText);
	});
	//Cria elemento dinâmicamente e insere na div resultado.
	const elementDiv = document.createElement('div');
	elementDiv.classList.add('divResposta');
	elementDiv.innerText = 'Menor valor: ' + conferidor;
	campoResultados.appendChild(elementDiv);
	return conferidor;
};

//Maior valor da lista.
function maiorValor() {
	const listaArray = Array.from(lista);
	let maiorNum;

	listaArray.forEach((op, i) => {
		if (i === 0)
			maiorNum = Number(op.innerText);
		else if (maiorNum < Number(op.innerText))
			maiorNum = Number(op.innerText);
	});
	const elementDiv = document.createElement('div');
	elementDiv.classList.add('divResposta');
	elementDiv.innerText = 'Maior: ' + maiorNum;
	campoResultados.appendChild(elementDiv);
	return maiorNum;
}

//Soma de todos os valores.
function callFuncsCalcMedia() {
	const media = somarLista() / totNumbers();
	menorValor();
	maiorValor();
	const element = document.createElement('div');
	element.classList.add('divResposta');
	element.innerText = 'Media: ' + Number(media);
	campoResultados.appendChild(element);
};