// Por qual motivo o código abaixo retorna com erros?
const marca = 'Fiat'; //Const fica apenas no bloco não vaza.
let portas = 4; //mesma situação do const.
{
    var cor = 'preto';
}
console.log(cor, marca, portas); //nome reservado.
  
  // Como corrigir o erro abaixo?
  const dois = 2;
  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
    return x + dois;
  }
  somarDois(4);
  dividirDois(6);
  
  // O que fazer para total retornar 500?
  var numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);