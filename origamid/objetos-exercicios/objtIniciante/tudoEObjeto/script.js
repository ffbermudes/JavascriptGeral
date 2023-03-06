// nomeie 3 propriedades ou métodos de strings
console.log('Filipe'.indexOf('F')); //Mostra a posição da letra escolhida
console.log('murdok'.charAt(1)); //Mostra a letra do número inserido.
console.log('Joaquim'.includes('J') ); //Retorna verdadeiro se houver a string pesquisada.

// nomeie 5 propriedades ou métodos de elementos do DOM
let botao = document.querySelector('.btn');
let botao2 = document.querySelector('.btn_2');

//1
console.log(botao.classList); //mostra as classes que existem dentro de botão.

//2
botao.addEventListener('mouseenter', function(){
    return document.body.style.backgroundColor = 'rgba(0, 0, 255, 0.5)';
})

//3
botao2.addEventListener('click', function(){
    return botao.innerText = 'mudei';
})

//4
const titulo = document.getElementById('title');
console.log(titulo.outerHTML); //Mostra todo HTML!

//5
const dentroDiv = document.querySelector('.addtag');
let criaP = document.createElement('button');
criaP.textContent = 'Colocando uma frase no parágrafo.';
criaP.style.marginTop = '25px';
dentroDiv.appendChild(criaP);

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

botao2.addEventListener('click', function(){
    botao2.ariaSelected;
    botao2.ariaSetSize;
    navigator.clipboard.writeText(botao2.textContent);
    alert(botao2.textContent);
});