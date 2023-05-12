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

// retorna os tempos das aulas
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


// -------------------------------------------------------
// -------------------------------------------------------
const listaAulas = [
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

// reduce() passando: 
// um acumulador. no final está passado um objeto {}
// os itens (aula)
// os index
const list = listaAulas.reduce((acumulador, aula, index) => {
  console.log(aula.nome)
  acumulador[index] = aula.nome
  return acumulador
}, {})



// -------------------------------------------------------------
// -------------------------- some() ---------------------------
// -------------------------------------------------------------
// RETORNA TRUE SE HOUVER PELO MENOS UMA OCORRÊNCIA VERDADEIRA

const frutas = ['Banana', 'Pêra', 'Uva']

const temUva = frutas.some(item => {
  return item === 'Uva'
  // retorna true se houver o item pesquisado
})

console.log(temUva)

// -------------------------------------------------------------
// -------------------------- every() ---------------------------
// -------------------------------------------------------------
// RETORNA FALSE SE HOUVER PELO MENOS UMA OCORRÊNCIA FALSA

const valores = [6, 43, 22, 88, 101, 29]

const valorMaior = valores.every(valor => {
  return valor > 6
  // retorna true se todos forem maior que 6
})

console.log(valorMaior)

// -------------------------------------------------------------
// ------------------------- filter() --------------------------
// -------------------------------------------------------------
// filtra a lista e retorna os valores true
// pois undefined, null, 0 e '' são false

const carros = ['gol', undefined, 'corsa', null, 0, 'Argo', '']

const filtrarArray = carros.filter(item => {
  return item
})
console.log(filtrarArray)


const pares = [2, 4, 6, 8, 10, 12, 14]

const filtraPares = pares.filter(item => {
  return item > 6
  // filtra e retorna apenas os valores maiores que 6
})
console.log(filtraPares)


const AulasFilter = [
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

// aulas maiores que 15 minutos
const maior15 = AulasFilter.filter(item => {
  return item.min > 15
})
console.log(maior15)