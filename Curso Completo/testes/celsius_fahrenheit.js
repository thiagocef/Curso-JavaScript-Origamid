// Escreva um script que pergunta ao usuário se ele deseja converter uma temperatura de grau Celsius para Farenheit ou vice-versa. Para cada opção, crie uma função. Crie uma terceira, que é um menu para o usuário escolher a opção desejada, onde esse menu chama a função de conversão correta.

console.log('Celsius <-----> Fahrenheit')
console.log('=== Escolha uma opção ===')
console.log('1. Celsius Para Fahrenheit')
console.log('2. Fahrenheit Para Celsius')
console.log('--------------------------')

//CALCULOS:
//(valor °C × 9/5) + 32 = resultado °F - C para F
//(valor °F − 32) × 5/9 = resultado °C - F para C

function converterParaF(valor) {
    return (valor * (9/5)) + 32
}
// console.log(converterParaF(2).toFixed(2))

function converterParaC(valor) {
    return (valor - 32) * (5/9)
}
// console.log(converterParaC(2).toFixed(2))

var op = 1
switch (op) {
    case 1:
        converterParaF()
        console.log(converterParaF(2).toFixed(2))
        break;
    case 2:
        converterParaC()
        console.log(converterParaC(2).toFixed(2))
        break;
    default:
        console.log('Opção Inválida')
        break;
}