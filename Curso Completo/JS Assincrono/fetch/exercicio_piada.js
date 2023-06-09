
// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const outPiada = document.querySelector('.out-piada'),
      btnProxima = document.querySelector('.btn-proxima')

function gerarPiada() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(resolve => {
        return resolve.json()
    })
    .then(piada => {
        console.log(piada.value)
        outPiada.innerHTML = piada.value
    })
}
btnProxima.addEventListener('click', gerarPiada)


