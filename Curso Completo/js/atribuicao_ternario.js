let numero = 20
let numero2 = 5

numero += 10
console.log(numero)
//é o mesmo que
numero = numero + 10

numero2 += numero
console.log(numero2)
//é o mesmo que
numero2 = numero2 + 10


//===============================================================
//==================== OPERADOR TERNÁRIO ========================
//===============================================================

//geralmente utilizada para atribuir um valor para uma variável
//dependendo de uma condição, se é verdadeira ou falsa


//OBS: não faz sentido retornar valor boolean no operador ternário

let idade = 18

let age = (idade >= 18) ? 'Pode beber' : 'Não pode beber'
console.log(age)

console.log('---------------------------')

let maiorQueDezoito = true

let adulto = maiorQueDezoito ? 'Maior' : 'Menor'

console.log(adulto)

console.log('---------------------------')


//=========================================================
//====================== EXERCÍCIOS =======================
//=========================================================

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
let scroll = 1000;
scroll += 500
console.log(scroll)

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

//darCredito vai receber o resultado da condição
darCredito = (possuiCarro && possuiCasa)
console.log(darCredito)