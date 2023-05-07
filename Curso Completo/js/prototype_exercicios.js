// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoas(nome, sobrenome, idade) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
}

Pessoas.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoas('Thiago', 'Cordeiro', 38)
console.log(pessoa1.nomeCompleto())

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document
console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
// console.log(Object.getOwnPropertyNames(Document.prototype))

// Liste os construtores dos dados abaixo
const li = document.querySelector('li')
console.log(li.constructor.name) // HTMLLIeLEMENT
console.log(li.click.constructor.name) // Function
console.log(li.innerHTML.constructor.name) // String
console.log(li.value.constructor.name) // Number
console.log(li.hidden) // Boolean
console.log(li.offsetLeft.constructor.name) // Number
console.log(li.click()) // undefined

// Qual o construtor do dado abaixo:
li.hidden // até aqui é um Boolean

// seguindo com o construtor
console.log(li.hidden.constructor.name) // o valor Boolean vem em forma de String
// Portanto, este retorno é uma String