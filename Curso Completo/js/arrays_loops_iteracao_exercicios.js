// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const curso = document.querySelectorAll('.curso')
const arrayCursos = Array.from(curso)

const objetoCurso = arrayCursos.map(item => {
    const titulo = item.querySelector('h1').innerHTML,
          descricao = item.querySelector('p').innerHTML,
          aulas = item.querySelector('.aulas').innerHTML,
          horas = item.querySelector('.horas').innerHTML
      
    return {
        titulo,
        descricao,
        aulas,
        horas
    }
})
console.log(objetoCurso)

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorCem = numeros.filter(item => {
    return item > 100
})
console.log(maiorCem)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const existeBaixo = instrumentos.some(item => {
    return item === 'Baixo'
})
console.log(existeBaixo)

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const somaCompras = compras.map(item => {
    return item.preco
})

let soma = 0
somaCompras.forEach(item => {
   soma += +(item.slice(2).replace(',', '.'))
})
console.log(soma)

// ---------------------
// UTILIZANDO reduce()
// ---------------------
const compraSoma = compras.reduce((acumulador, item) => {
    const precoLimpo = +item.preco.slice(2).replace(',', '.')

    return acumulador + precoLimpo
}, 0)
console.log(compraSoma)