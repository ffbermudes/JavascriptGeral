//FUNCOES

// Crie uma função para verificar se um valor é Truthy
function checkTrue(x){
   return !!x; //verificando se é true.
}
let bla = checkTrue(0);
console.log(bla);
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(x, y, z, w){
    return x+y+z+w;
}
console.log(perimetroQuadrado(3,4,5,7));

// Crie uma função que retorne o seu nome completo

// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
    nome = `${nome} ${sobrenome}`;
    return console.log(nome);
}
nomeCompleto('Filipe', 'Freitas Bermudes');

// Crie uma função que verifica se um número é par
function checkPar(numero){
    var modulo = numero % 2 == 0;
    return modulo;
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function checkTipo(Tdado){
    return typeof Tdado;
}
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
function mostraNome(){
    return console.log('Filipe Freitas Bermudes.');
}
addEventListener('scroll', mostraNome);

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
    function jaVisitei(paisesVisitados) {
    return console.log(`Já visitei ${paisesVisitados} do total de ${precisoVisitar(20)} países`);
  }
  precisoVisitar(20);
  jaVisitei(20);