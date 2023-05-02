//Por qual motivo o código abaixo retorna com erros?

{
    var cor = 'preto'
    const marca = 'Fiat'
    let portas = 4

    console.log(marca, portas)
}
console.log(cor)

//------------------------------------------------------------
console.log('-----------------')



//Como corrigir o erro abaixo?

const dois = 2
function somarDois(x) {
    return x + dois
}

function dividirDois(x) {
    return x / dois
}
console.log(somarDois(4))
console.log(dividirDois(4))


//------------------------------------------------------------
console.log('-----------------')


//O que fazer para total rerotnar 500?

let numero = 50

for(let numero = 0; numero < 10; numero++) {
    console.log(numero)
}
const total = 10 * numero
console.log(total)