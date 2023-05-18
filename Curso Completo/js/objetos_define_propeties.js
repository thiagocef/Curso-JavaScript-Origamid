// definePropeties
// configura e define propriedades 
// para que sejam ou não alteradas

const moto = {
    capacete: true
}

Object.defineProperties(moto, {
    rodas: {
        value: 2, // define o valor
        configurable: false, // impede excluir e alterar o valor
        writable: false // impede alterar o valor
    }
})

console.log(moto)

// GET E SET
const carro = {
    cinto: true
}

Object.defineProperties(carro, {
    rodas: {
        get() {
            return this._rodas
        },
        set(valor) {
            this._rodas = valor * 4 + ' Total Rodas'
        }
    }
})

carro.rodas = 4
console.log(carro.rodas)


// Object.getOwnPropertyDescriptors()
// lista todos os métodos e propriedade de um objeto
// e suas confurações

console.log(Object.getOwnPropertyDescriptors(carro))

// 
console.log(Object.getOwnPropertyNames(carro))
