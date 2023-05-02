var possuiGraduacao = true

if (possuiGraduacao) {
    console.log('Possui graduação')
} else {
    console.log('Não possui graduação')
}

var numero1 = 2,
    numero2 = '2'

if (numero1 === numero2) {
    console.log('Valores e tipos iguais')
} else if (numero1 !== numero2) {
    console.log('Valores e tipos diferentes')
} else if (numero1 != numero2) {
    console.log('Valores diferentes, tipos iguais')
} else if (numero1 == numero2) {
    console.log('Valores iguais e tipos diferentes')
}

console.log('---------------------------')

//forma simplificada de escrever um if

let possuiFaculdade = true

if(possuiFaculdade)
//esssa forma só aceita uma linha de código dentro do if
    console.log('Possui Faculdade')
else
    console.log('Não possui faculdade')