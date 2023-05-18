// Crie uma função que verifique
// corretamente o tipo de dado
function verificarTipoDado(dado) {
    return Object.prototype.toString.call(dado)
}
console.log(verificarTipoDado([]))

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {}
Object.defineProperties(quadrado, {
    lados: {
        value: 4, 
        enumerable: true,
        // writable: false, // por padrão, tudo é false
        // configurable: false, // por padrão, tudo é false
    }
})


// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
  }
Object.freeze(configuracao) // não altera e não deleta
  
// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))