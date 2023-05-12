// METODOS DE FUNÇÃO
// CALL()
// EXECUTA A FUNÇÃO

function darOi() {
    console.log('oi para voce')
}



function descricaoCarro() {
    console.log(this)
    console.log(this.marca, this.ano)
}

// descricaoCarro()


// THIS
// o valor de THIS faz referência ao objeto criado durante
// a construção do objeto(Constructor Function ou  function(){}).
// Podemos trocar a refecência do método this, utilizando call()

// EXEMPLO REAL de utilização do THIS

function Dom(seletor) {
    this.element = document.querySelector(seletor)
}

const ul = new Dom('ul')
console.log(ul)


// ARRAYS E CALL

const frutas = ['Uva', 'Maçã', 'Banana']

Array.prototype.pop.call(frutas)  // this faz referência ao array fruta

console.log(frutas) 


// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

const li = document.querySelectorAll('li')

const filtroLiCall = Array.prototype.filter.call(li, (item) => {
    return item.classList.contains('ativo')
})
console.log(filtroLiCall)

// é a mesma coisa disso:
const arrayLi = Array.from(li)

const filtroLi = arrayLi.filter(item => {
    return item.classList.contains('ativo')
})

console.log(filtroLi)


// ------------------------------------------------------------------------
// ------------------------- function.apply() -----------------------------
// ------------------------------------------------------------------------
// APPLY()

// recebe um array como argumento(diferente do call())

const numeros = [3, 4, 6, 345, 2, 6, 78, 0, 34]
console.log(Math.max.apply(null, numeros)) // aqui o null é o THIS
 // retorna o maior número


// ------------------------------------------------------------------------
// ------------------------- function.bind() -----------------------------
// ------------------------------------------------------------------------
// BIND()

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
        return `${this.marca} acelerou ${aceleracao} em ${tempo}`
    }
}
// console.log(carro.acelerar(120, 40))

const honda = {
    marca: 'Honda'
}

const acelerarHonda = carro.acelerar.bind(honda)
console.log(acelerarHonda(300, 15))