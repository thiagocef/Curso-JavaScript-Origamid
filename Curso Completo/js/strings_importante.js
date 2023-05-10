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
      valor: 'R$ 149',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
];

let taxa = 0,
    recebimento = 0
    
transacoes.forEach(item => {
    // se a descrição dos itens começa com Taxa
    if(item.descricao.startsWith('Taxa')) {
        // retira os 4(0 - 3) primeiros elementos(R$ )
        // transforma em número(parseInt) ou (+item.valor.slice(3))
        // console.log(parseInt(item.valor.slice(3)))

        // faz a soma
        // primeira forma
        taxa += (parseInt(item.valor.slice(3)))
    }

    // se a descrição dos itens começa com Recebimento
    if(item.descricao.startsWith('Recebimento')) {
        // retira os 4(0 - 3) primeiros elementos(R$ )
        // transforma em número(parseInt) ou (+item.valor.slice(3))
        // console.log((parseInt(item.valor.slice(3))))
        
        // faz a soma
        // segunda forma
        recebimento += +item.valor.slice(3)
    }

}) 
console.log(`Soma total das taxas: ${taxa}`)
console.log(`Soma total dos recebimentos: ${recebimento}`)

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const transportesArray = transportes.split(';')
console.log(transportesArray)

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
            </ul>`;
// 
html = html.split('span').join('a')
console.log(html)


// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(`Ultimo elemento: "${frase[frase.length - 1]}"`)
// ou
// frase.slice(-1)

// Retorne o total de taxas
const lsitaTransacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial']

let cont = 0
lsitaTransacoes.forEach(item => {
  // transforma tudo em minúsculo
  let min = item.toLowerCase()
  // console.log(min)

  // se 'taxa' estiver incluso no array
  if(min.includes('taxa')) {
      console.log(min)
      cont ++ // faz o incremento a cada ocorrência de 'taxa'
  }
})

console.log(`Total de taxas: ${cont}`)


// Retorne um número aleatório
// entre 1050 e 2000
const aleatório = Math.floor(Math.random() * 2000) + 1050
console.log(aleatório)

// Retorne o maior número da lista abaixo
const numeroString = '4, 5, 20, 8, 9',
      numeroArray = numeroString.split(', '),
      numeroMaximo = Math.max(...numeroArray)
console.log(numeroMaximo)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];



let arredondado = [],
soma = 0
function limarPreco() {
  listaPrecos.forEach(item => {
    let limpo = +item.slice(3).trim().replace(',', '.')

    // arredondado.push(limpo)
    console.log(+limpo.toFixed(2))

    soma = soma +  limpo

  });
  
  console.log(+soma.toFixed(2))
}

limarPreco()

