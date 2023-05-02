//forEach
//percorrer um array dinamicamente

let estados = ['PB', 'RN', 'RS', 'SP']

estados.forEach(function(item){
    console.log(item)

    
})


console.log('------------------------------')

let games = ['Mário', 'TLOU', 'FIFA', 'Zelda', 'Sonic']

games.forEach(function(game, index) {
    console.log(game, 'está no índice' , index)
})


console.log('------------------------------')

let fruits = ['Pera', 'Uva', 'Maçã', 'Goiaba', 'Abacaxi']

fruits.forEach(function(fruit, index){
    console.log(`${fruit} está no índice ${index}`)
})


//===========================================================
//====================== EXERCÍCIOS =========================
//===========================================================
console.log('------------------------------')
console.log('-------- EXERCÍCIOS ----------')
console.log('------------------------------')

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

let copas = [1959, 1962, 1970, 1994, 2002]

copas.forEach(function(copa) {
    console.log(`O Brasil ganhou a copa de: ${copa}`)
})

console.log('------------------------------')


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])

    if (frutas[i] === 'Pera') {
        console.log('FIM!')
        break
    }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
console.log('------------------------------')

let lastFruit = frutas.length - 1
console.log(`${frutas[lastFruit]}`)
