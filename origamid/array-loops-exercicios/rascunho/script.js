var videoGames = ['Switch', 'PS4', 'Xbox', 'PS5'];
videoGames.pop(); //Remove o ultimo item.
videoGames.push('Nintendo'); //Adiciona um item no final.
console.log(videoGames);
console.log(videoGames.length);

//Método mais convencional de fazer o loop.
for(let i = 0; i <= videoGames.length; i++){
    console.log(videoGames[i]);
    // if (videoGames[i] === 'PS4'){
    //     break;
    // }
}
console.log('--------------------------------------------------');
//Método forEach de fazer o loop.
videoGames.forEach(function(item, index, array){
    console.log(item, index, array);
})