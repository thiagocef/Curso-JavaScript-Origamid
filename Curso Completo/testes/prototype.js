// PROTOTYPE é um OBJETO adicionado a uma FUNÇÃO quando ela é criada

function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade

}

// é possível criar novos métodos e propriedades para a função construtor Pessoa
// através do prototype
Pessoa.prototype.andar = function() {
    return `${this.nome} andou`
}

// novo objeto Pessoa chamado thiago
const thiago = new Pessoa('Thiago', 38)
// o novo objeto tem acesso às novas propriedades e métodos criadas
// com o prototypt
console.log(thiago.andar())

console.log(Pessoa.prototype)

// __PROTO__
// diferença entre prototype NodeList e Array

const lista = document.querySelectorAll('li')
// o prototype dessa lista é uma NodeList
// possui poucos métodos
console.log(lista)

// tranformando a NodeList em um Array 
// para ter acesso a vários métodos herdados do PROTOTYPE
const listaArray = Array.prototype.slice.call(lista)
console.log(listaArray)

// OUTRA FORMA(com resalvas)
// tranformando a NodeList em um Array 
// para ter acesso a vários métodos herdades de ARRAY
const arrayList = Array.from(lista)
console.log(arrayList)


// ----------------------------------------
// ----------------------------------------
// ---ENTENDA o que está sendo retornado---
// ----------------------------------------
// ----------------------------------------

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true
    }
}

// verifique o nome do construtor com
// .constructor.name
console.log(Carro.constructor.name)
console.log(Carro.marca.constructor.name)
console.log(Carro.marca.charAt(1))
console.log(Carro.andar)
console.log(Carro.andar())