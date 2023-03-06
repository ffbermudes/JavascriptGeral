// Crie uma array com os anos que o Brasil ganhou a copa
let vitorias = [1959, 1962, 1970, 1994, 2002];


// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
vitorias.forEach(function(conteudo){
    console.log(`O brasil ganhou a copa de ${conteudo}.`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
for(let i = 0; i < frutas.length; i++){
    frutas[i] = frutas[i].toUpperCase();
    console.log(frutas[i]);
    if(frutas[i] == 'PERA'){
        break;
    }
}
let lastArray = frutas[frutas.length - 1];