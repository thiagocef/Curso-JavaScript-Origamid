//======= OBJETOS

var pessoa = {
    nome: 'Thiago',
    idade: 37,          //propriedades
    profissao: 'TI',
    possuiFaculdade: true
}

//acessando os valores do objedo
console.log(pessoa.nome)
console.log(pessoa.possuiFaculdade)
console.log(`Tenhos ${pessoa.idade} anos e trabalho com ${pessoa.profissao}`)

//======= MÉTODOS

console.log('-------------------------------')

var quadrado = {
    lados : 5,
    area: function(lado) { //essa função agora é um método do objeto quadrado
        return lado * lado
    },
    perimetro: function(lado) {
        return this.lados * lado //this acessa outras propriedades do objeto quadrado
    }
}
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))

console.log('-------------------------------')

//===== EXEMPLOS DE MÉTODOS NATIVOS DO JS

console.log(Math.PI)
console.log(Math.random())

console.log('-------------------------------')

//===== MAIS EXEMPLOS

//varável que recebe valores do objeto
var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight() {
        return this.height / 2
    }
}
console.log(menu.metadeHeight())

console.log('-------------------------------')

//SET
menu.color = 'blue' //pode adicionar novas propriedades fora do objeto 

menu.esconder = function () {
    console.log('Escondi') //pode adicionar novos métodos fora do objeto 
}

//GET
var bg = menu.backgroundColor //varável que recebe valores do objeto


//=============================================================
//======================== EXERCÍCIOS =========================
//=============================================================

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
    nome: 'Thiago',
    sobrenome: 'Cordeiro',
    cidade: 'João Pessoa',
    nomeCompleto: function() {
        return `Nome completo: ${this.nome} ${this.sobrenome}`
    }
}
console.log(dadosPessoais.nomeCompleto())

console.log('-------------------------------')

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
carro.preco = 3000
console.log(carro.preco)

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
raca: 'labrador',
cor: 'preto',
idade: 10,
late: function(pessoa) {
    if (pessoa === 'h') {
        return 'AU AU AU!!'
    } else {
        return ':P'
    }
}
}
console.log(cachorro.late('h'))

console.log('-------------------------------')

let roupa = {
    tipo: 'Camiseta',
    tamanho: ['P', 'M', 'G'],
    cores: ['Preta', 'branca'],
    composicao: 'Algodão',
    desconto: 0.30,
    preco(valor) {
        if(valor >= 100) {
            console.log(`Valor do desconto: R$${valor * this.desconto}`)
            return `Preço final: R$${valor - (valor * this.desconto)}`

        } else {
            console.log('O desconto não se aplica')
            return `Preço final: R$${valor}`
        }
    }
}
console.log(roupa.tipo)
console.log(roupa.cores[0])
console.log(roupa.tamanho[1])
console.log(roupa.preco(99))