document.getElementById('corpo').addEventListener('load', carregar()) //Não ficou claro para mim porque está funcionando.

function carregar(){
    var img = document.getElementById('imagem')
    var msg = document.getElementById('mensagem')
    var data = new Date()
    var hora = data.getHours()
    var hora2 = data.getMinutes()
    var horaminutos = String(hora) + String(hora2)
    var horacompleta = Number(horaminutos)
    alert(`${typeof(horaminutos)} ${horaminutos} ${horacompleta} ${typeof(horacompleta)}`)
    msg.innerText = `Agora são ${hora} horas ${hora2} minutos !`
    
    if(hora >= 0 && hora < 12){
        img.src = "img/manha.jpg"
        img.alt = "Foto da manhã"
        document.body.style.background = 'lightpink'
    }
    else if(hora >= 12 && hora < 18){
        img.src = "img/tarde.jpg"
        img.alt = "Foto da tarde"
        document.body.style.background = 'tomato'
    }
    else{
        img.src = "img/noite.jpg"
        img.alt = "Foto da noite"
        document.body.style.background = '#333'
    }
}