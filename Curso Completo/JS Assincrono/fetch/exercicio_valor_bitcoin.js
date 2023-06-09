// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da url and reais.
// atualize este valor a cada 30s

const url = fetch(`https://blockchain.info/ticker`),
      outValor = document.querySelector('.out-valor')

url.then(resolve => {
    return resolve.json() // transforma em objeto JSON
})
.then(resolve => {
    setInterval(() => {
        console.log(resolve.BRL.buy)
        outValor.innerHTML = ('R$' + resolve.BRL.buy).replace('.', ',')
    }, 1000 * 30) //atualiza a cada tempo indicado
})

