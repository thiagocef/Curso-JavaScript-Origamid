let videoGames = ['Switch', 'PS4', 'Xbox']

// console.log(videoGames)
// console.log(videoGames[0])
// console.log(videoGames[1])

//METODOS E PROPRIEDADES DE UM ARRAY

// console.log(videoGames.pop()) 
//remove o ultimo item e retorna ele

// console.log(videoGames) 
//aqui já não tem mais o item Xbox[2]

// console.log(videoGames.push('Nintendo')) 
//adiciona um item ao final do array

// console.log(videoGames)

// console.log(videoGames.length) 
//tamanho/quantidade de itens do array

const instrumentos = ['Guitarra', 'Baixo', 'Violão']
const carro = 'Gol'

// verificar se é um array
console.log(Array.isArray(instrumentos))
console.log(Array.isArray(carro))

// criando array vazia com tamanho definido
const array = new Array(10)
console.log(array)

// juntar todos os elementos de um array e retornar uma string
const nome = ['Thiago', 'Cordeiro', 'Espinola', 'Freire']
console.log(nome.join(' '))

const nomePessoa = {
    nome: ['Thiago'],
    sobrenome: ['Cordeiro Espinola Freire'],
    idade: 38
}
console.log(nomePessoa.nome.concat(nomePessoa.sobrenome).join(' ').concat(nomePessoa.idade))

let htmlString = '<h2>Titulo Principal<h2>'
// htmlString = htmlString.split('h2')
// htmlString = htmlString.join('h1')

htmlString = htmlString.replace('h2', 'h1')
console.log(htmlString)


const cloneNome = nome.slice(0, nome.length)

console.log(cloneNome)