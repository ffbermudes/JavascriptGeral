const botao_calc = document.getElementById('ativa_funcao').addEventListener('click', tabuada);

function tabuada(){
    let qual_tabuada = document.getElementById('text_n1');
    //variável do campo de digitação.
    let errotext = document.getElementById('aviso_de_erro');
    //variável de mensagem de erro.
    let res = document.getElementById('valores_tabuada');
    
    if (qual_tabuada.value.length == 0){
        res.innerHTML = '';
        errotext.innerHTML = '<p id="erro">Favor digitar algo no campo!</p>'
    }else{
        num = Number(qual_tabuada.value);
        res.innerHTML = '';
        for(let c = 1; c <= 10; c++){
            let element_option = document.createElement('option');
            element_option.text = `${c} X ${num} = ${num*c}`;
            res.appendChild(element_option);
        }
        errotext.innerHTML = '';
    }
}