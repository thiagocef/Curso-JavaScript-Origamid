// objeto literal

const cidade = {
    marca: 'João Pessoa',
    populacao: 600000
}

// novo construtor de objeto

const pessoa = new Object({
    nome: 'Thiago',
    idade: 38
})

// nova função com Object.create(obj, propriedades)

const carro = {
    rodas: 4,
    init(marca) {
        this.marca = marca
        return this
    },
    acelerar() {
        return `${this.marca} acelerou as ${this.rodas} rodas`
    },
    buzinar(){
        return `${this.marca} buzinou`
    }
}

// vamos criar um novo tipo de carro

const honda = Object.create(carro)
honda.marca = 'Honda'
console.log(honda.acelerar())

const ferrari = Object.create(carro).init('Ferrari')
console.log(ferrari.acelerar())


// Object.assing(alvo, objeto1, objeto2)
// adiciona as propriedades e métodos já criadas
// ao alvo(novo objeto)

// um protótipo de automóveis
const funcaoAutomovel = {
    acelerar() {
        return 'acelerou'
    },
    buzinar() {
        return 'buzinou'
    }
}

const moto = {
    rodas: 2,
    capacete: true
}
// adiciona a funçãoAutomóvel ao objeto moto
Object.assign(moto, funcaoAutomovel)

// agora moto possui as propriedades e métodos de funcaoAutomovel
console.log(moto);