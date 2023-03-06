const btn_check = document.getElementsByClassName('btn')[0].addEventListener('click', calcsex)
const nascimentoCampo = document.getElementById('input-number-1')

function calcsex(){
    //Alterei o tipo primitivo de datadenascimento para numérico. Calculei a idade da pessoa.
    var Datadenascimento = Number(nascimentoCampo.value)
    var anoatual = new Date().getFullYear()
    var idade = anoatual - Datadenascimento

    //Tag PAI, utilizada para inserir as tags filho.
    var res = document.getElementsByClassName('texto-foto')[0]

    //Criando Tags dinâmicamente
        //Tag de Imagem
    var imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
        //Tag de texto
    var texto = ''

    //Definindo cada radio com seus respectivos valores. [FEMININO] [MASCULINO]
    var opRadio = document.getElementsByName('rad-sex')
    if(opRadio[0].checked){
        genero = 'Masculino'
        //Alternativas masculinas
        if (idade >= 0 && idade < 12){
            texto = `É uma criança de ${idade} anos do gênero ${genero}.`

            imagem.setAttribute('src', 'https://img.freepik.com/fotos-gratis/menino-feliz-sorridente-apontando-os-dedos-para-cima-na-copyspace_171337-16394.jpg?w=1380&t=st=1670878548~exp=1670879148~hmac=be98820fda90b5fb175959e75e9c996e2bd897580153ed3bf17e31afc5459bf4')
        }else if( idade >= 12 && idade < 18){
            texto = `É um adolescente de ${idade} anos do gênero ${genero}`
            imagem.setAttribute('src', 'https://img.freepik.com/fotos-gratis/conteudo-jovem-bonito-na-camiseta-azul-apontando-de-lado_1262-17845.jpg?w=1380&t=st=1670884651~exp=1670885251~hmac=3c3853718c84c9db3cdeaeb696c6d4244f1d0b875ef47d350e28c2574291d519')
        }else if (idade >=18 && idade < 60){
            texto = `É um adulto de ${idade} anos do gênero ${genero}`
            imagem.setAttribute('src', 'https://img.freepik.com/fotos-gratis/animado-feliz-bonito-alegre-afro-americano-barbudo-vestindo-jaqueta-jeans-e-moletom-laranja_176420-33535.jpg?w=1380&t=st=1670885057~exp=1670885657~hmac=5f26cca6aba5cca7e8da850c04b99a30abed0f2e3fdd760f03f6e65cf73239bf')
        }else if (idade >=60 && idade <= 115){
            texto = `É um idoso de ${idade} anos do gênero ${genero}`
            imagem.setAttribute('src','https://img.freepik.com/fotos-gratis/foto-de-um-homem-senior-bonito-emocional-com-cabeca-careca-e-barba-por-fazer-sorrindo-amplamente-e-apontando-o-dedo-indicador-para-a-camera-rindo-de-uma-historia-engracada-ou-piada-posando-isolado-na-parede-branca-do-estudio_343059-4227.jpg?w=1380&t=st=1670886016~exp=1670886616~hmac=50e269d85422f119dfeceb822afdea589c02a86ca3f5113a6b8a773b59dd851a')
        }else{
            texto = `Não tem como você ter toda essa idade! ${idade} anos. Para de caô pô!`
            imagem.setAttribute('src', 'https://img.freepik.com/fotos-gratis/vista-frontal-da-pequena-vela-acesa-no-preto_179666-41529.jpg?w=1380&t=st=1670886258~exp=1670886858~hmac=8800d9e6536c17a4941a63c1c9701620f4271013bfffa51ba52a40d2b426da2c')
        }
    }
    else if(opRadio[1].checked){
        genero = 'Feminino'
        //Alternativas Femininas
        if (idade >= 0 && idade < 12){
            texto = `É uma criança de ${idade} anos do gênero ${genero}.`

            imagem.setAttribute('src', 'https://img.freepik.com/fotos-gratis/menina-sorridente-com-um-vestido-vermelho_23-2148984788.jpg?w=1060&t=st=1670896822~exp=1670897422~hmac=892f939a90a12b66496891217b60b3c0dacfd4e1cd6df2ef72ccddbdcece9d89')
        }else if( idade >= 12 && idade < 18){
            texto = `É um adolescente de ${idade} anos do gênero ${genero}`

            imagem.setAttribute('src', 'https://img.freepik.com/fotos-gratis/feliz-senhora-sardenta-de-oculos-sente-se-satisfeita-usa-macacao-indica-no-canto-superior-esquerdo-sugere-usar-sabiamente-o-espaco-da-copia-fica-encostada-na-parede-branca-tem-sorriso-largo_273609-29455.jpg?w=1060&t=st=1670896892~exp=1670897492~hmac=5267770b7317734b24ea751b521ac5f7f7ee38a30afb32b8a715b5f28736d026')
        }else if (idade >=18 && idade < 60){
            texto = `É um adulto de ${idade} anos do gênero ${genero}`

            imagem.setAttribute('src', 'https://img.freepik.com/fotos-gratis/alegre-mulher-envelhecida-media-com-cabelos-cacheados_1262-20859.jpg?w=1060&t=st=1670896943~exp=1670897543~hmac=7d6da4a21b15897924cb306bc6ba3bd099f78ee3e18cf23a6704fb89b573eb0b')
        }else if (idade >=60 && idade <= 115){
            texto = `É um idoso de ${idade} anos do gênero ${genero}`

            imagem.setAttribute('src','https://img.freepik.com/fotos-premium/sorrindo-mulher-senior-dedo-erguendo-usando-computador-portatil-casa_107420-10233.jpg?w=1060')
        }else{
            texto = `Não tem como você ter toda essa idade! ${idade} anos. Para de caô pô!`

            imagem.setAttribute('src', 'https://img.freepik.com/fotos-gratis/vista-frontal-da-pequena-vela-acesa-no-preto_179666-41529.jpg?w=1380&t=st=1670886258~exp=1670886858~hmac=8800d9e6536c17a4941a63c1c9701620f4271013bfffa51ba52a40d2b426da2c')
        }
    }
    res.innerHTML = texto
    res.appendChild(imagem)
}