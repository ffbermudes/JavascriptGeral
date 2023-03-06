// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxas = Number();
let recebimentos = Number();

transacoes.forEach((transacao)=>{
	//Calculo da Taxa.
	if (transacao.descricao.slice(0,4)==='Taxa'){
		taxas += +transacao.valor.replace('R$', '').trim();
		console.log(taxas);
	}
	//Calculo do Recebimento.
	else{
		recebimentos += +transacao.valor.replace('R$', '').trim();
		console.log(recebimentos + ' <<<<');
	}
});

console.log(`Valor de total recebido: ${recebimentos}`);
console.log(`Valor total pago: ${taxas}`);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const transportesArray = transportes.split(';');
console.log(transportesArray);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
const htmlAnchor = html.split('span').join('a').trim();

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length-1));

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totTaxas = 0;
transacoes2.forEach((tran, i)=>{
	transacoes2[i] = tran.toUpperCase().trim();
	if (transacoes2[i].indexOf('TAXA') !== -1) totTaxas++;
});
console.log(totTaxas);