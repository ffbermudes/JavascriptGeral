const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.splice(1, 0, 'Kia', 'Mustang'); // []
console.log(carros); // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']


//Consigo através do splice Eu consigo escolher a posição. Definir a quantidade de indices após a posição escolhida. e ainda escolher quais dados serão inseridos a partir da posição definida.
//EXEMPLO:
console.log(carros);
carros.splice(3,1, 'Uno');
console.log(carros);

brinquedos = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'];

// [].copyWithin(alvo, inicio, final)
console.log(brinquedos.copyWithin(3, 0, 2));

console.log(brinquedos.fill('default', 0, 3))