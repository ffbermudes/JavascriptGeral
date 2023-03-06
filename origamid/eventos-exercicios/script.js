const imagem = document.querySelector('img');

imagem.addEventListener('click', callback);

function callback(){
    console.log('teste');
    console.log(this.offsetHeight);
}