// const carros = ['Ford', 'Fiat', 'Honda']

// podem ser passados tres parametros
// carros.forEach((aula, index, carros) => {
//     console.log(index ,aula)
// })

// formas de utilizar arrow function

const li = document.querySelectorAll('li')

// em uma linha de código
li.forEach(aula => console.log(aula))

// é o mesmo que:
li.forEach(aula => {
    aula.classList.add('ativo')
})
// forEach SEMPRE RETORNA UNDEFINED

// -------------------------------------------------------------
// -------------------------  MAP()  ---------------------------
// -------------------------------------------------------------
// MELHOR FORMA DE ITERAÇÃO
// pois o retorno do forEach é sempre undefined

const marcas = ['Ford', 'Fiat', 'Honda']

// map() TEM RETORNO (return)
const novasMarcas = marcas.map((aula, index, array) => {
    
    return aula.toUpperCase()
})

// novasMarcas é um novo array com o retorno de marcas.map()
// por ter um return, não retorna undefined

console.log(novasMarcas)
// mostra o novo array alterado

const numeros = [1, 2, 3, 4, 5]

// numerosX2 é um novo array com o retorno de numeros.map()
// por ter um return, não retorna undefined
const numerosX2 = numeros.map(num => num * 2)

// retorna cada valor * 2
console.log(numerosX2)


const numerosPares = numeros.map(num => {
    num = num * 3
    return (num % 2 == 0) ? `par: ${num}` : `impar: ${num}`
})
// mostra o novo array alterado
// com os valores * 3
// mostra se o resultado é par ou ímpar
console.log(numerosPares)


// -------------------------------------------------------------
// Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

// ARRAY DE OBJETOS
const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]

const tempo = aulas.map((aula) => {
    if(aula.min > 15) {
        return `${aula.nome} - ${aula.min} minutos`
    } else {
        return null
    }
})
console.log(tempo)

const tempoAulas = aulas.map(aula => aula.min)
// console.log(tempoAulas)

// -------------------------------------------------------------
// ------------------------- REDUCE() --------------------------
// -------------------------------------------------------------

const classes = [10, 25, 30]

// acumulador começa com o primeiro valor
const reduceClasses = classes.reduce((acumulador, item, index, array) => {
    return acumulador + item // retorna a soma dos valores(item) do array

}, 0) // 0 corresponde ao acumulador
      // ex: se for 10, recebe o return e soma + 10

console.log(reduceClasses)


// MAIOR NÚMERO
const num = [10, 25, 30, 3, 54, 33, 22]

// acumulador = anterior - começa (0) definido no final da função
// item = atual (25)
const maiorNum = num.reduce((anterior, atual) => {
    // IF TERNÁRIO
    return anterior > atual ? anterior : atual
}, 0)

console.log(maiorNum)