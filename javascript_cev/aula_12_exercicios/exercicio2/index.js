const check_btn = document.getElementsByClassName('btn')[0].addEventListener('click', verificar)

function verificar(){
    var ano = document.getElementById('input-number-1') //data de nascimento

    //Armazenamento das opções F ou M você define pelo nome do radio.
    var sexo = document.getElementsByName('rad-sex')

    //Configurando as opções de radio
    var genero = ''
    if(sexo[0].checked){
        genero = 'Masculino'
    }else if(sexo[1].checked){
        genero = 'Feminino'
    }

    var datasist = new Date()
    //data do sistema
    var anoAgora = datasist.getFullYear()
    //pegar somente o ano
    var tdvida = anoAgora - Number(ano.value)
    //calculo da idade da pessoa

    //variaveis de reposta
    var imagem = document.getElementById('foto')
    var msg = document.getElementsByClassName('texto')[0]

    //CRIANÇAS 0 à 12 anos.
    if (tdvida >= 0 && tdvida < 12 && genero == 'Masculino'){
        msg.innerHTML = `Essa criança possui ${tdvida} anos e é do sexo ${genero}`
        imagem.src="https://www.poderdascores.mundobic.com.br/wp-content/uploads/2021/12/crian%C3%A7a-curiosaa.jpeg"
    }else if (tdvida >=0 && tdvida <12 && genero == 'Feminino'){
        msg.innerHTML = `Essa criança possui ${tdvida} anos e é do sexo ${genero}`
        imagem.src="https://static.natura.com/cdn/ff/WJpn3zMci-HHFpm-IERjHg2dwKzvpCEpglG0o-uGjIk/1663822715/public/styles/original/public/2020-03/cabelo-crianca-dicas-cuidar-cachinhos_mobile.jpg?itok=OGK-OuYe"
    }

    //PRE-ADOLESCENTE || ADOLESCENTE

    else if(tdvida >= 12 && tdvida < 18 && genero == 'Masculino'){
        msg.innerHTML = `Esse adolescente possui ${tdvida} anos e é do sexo ${genero}`
        imagem.src="https://tribunadejundiai.com.br/wp-content/uploads/2020/11/adolescente-brasileiro-recebe-recompensa-de-r-130-mil-apos-ajudar-a-corrigir-falha-do-instagram-1200x900.jpg"
    }
    else if(tdvida >= 12 && tdvida < 18 && genero == 'Feminino'){
        msg.innerHTML = `Esse adolescente possui ${tdvida} anos e é do sexo ${genero}`
        imagem.src="https://img.freepik.com/fotos-gratis/retrato-de-adolescente-feliz-por-voltar-a-universidade_23-2148586575.jpg?w=2000"
    }

    //ADULTOS
    else if(tdvida >= 18 && tdvida < 60 && genero == 'Masculino'){
        msg.innerHTML = `É um adulto de ${tdvida} anos e é do gênero ${genero}`
        imagem.src="https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg"
    }
    else if(tdvida >= 18 && tdvida < 60 && genero == 'Feminino'){
        msg.innerHTML = `É um adulto de ${tdvida} anos e é do gênero ${genero}`
        imagem.src="https://santacasadermatoazulay.com.br/wp-content/uploads/2018/01/12877-as-lesoes-de-acne-na-pele-da-mulher-adul-article_image-1.jpg"
    }

    //IDOSOS
    else if(tdvida > 60 && genero == 'Masculino'){
        msg.innerHTML = `É um idoso de ${tdvida} anos e é do gênero ${genero}`
        imagem.src="https://media.istockphoto.com/id/941105048/pt/foto/portrait-of-smiling-senior-businessman-close-up.jpg?s=612x612&w=0&k=20&c=FvdZThAuaRkA4HpihEJMgWBo1eRZxHUC-UXU3v0nXg4="
    }
    else if(tdvida > 60 && genero == 'Feminino'){
        msg.innerHTML = `É um idoso de ${tdvida} anos e é do gênero ${genero}`
        imagem.src="https://clinicadafamiliadf.com.br/wp-content/uploads/2021/07/portrait-of-generous-kind-mature-senior-female-in-stylish-shirt-holding-hands-clasped-on-her-chest-feeling-grateful-for-great-present-on-her-birthday-elderly-woman-expressing-appreciation-1.jpg"
    }

}