//Definindo botão e evento de click que carrega função.
const btncontar = document.getElementById('btnCalc');
btncontar.addEventListener('click', calcular);

function calcular(){
    //Variável dos três campos Number. [inicio, Fim, Passo]
    //Armazenando-as em formato de número.
    let campnumber1 = document.getElementById('firstNumber').value;
    let campnumber2 = document.getElementById('secondNumber').value;
    let campnumber3 = document.getElementById('thirdNumber').value;
    //Campo HTML com resultado
    let resultado = document.getElementById('res');

    //Para o funcionamento correto do objeto length, eu preciso manter a variável como String. Para fazer uso do FOR eu transformo em numérico. Se não não da certo.
    if (campnumber1.length == 0 || campnumber2.length == 0 || campnumber3.length == 0){
        resultado.innerHTML = '<div class="sefalso">[ERRO] Nenhum campo pode estar vazio.</div>';
    }else{
        //Transformando em variáveis numéricas.
        //O Guanabara cria novas variáveis para poder trabalhar com o for. Mantendo os valores originais na função que está como String.
        let i = Number(campnumber1);
        let f = Number(campnumber2);
        let p = Number(campnumber3);
        let armResul = ''; //Variável para armazenamento do resultado.
        //Por questões de produtividade irei criar uma variável contador na estrutura de repetição.
        for(let c = i; c < f; c+=p){
            armResul += ` ${c} >`;
        }
        resultado.innerHTML = `<p class="severdadeiro"> ${armResul} FIM! </p>`;
    }
}