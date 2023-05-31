const iniciar = document.querySelector('.iniciar'),
      pausar = document.querySelector('.pausar'),
      tempo = document.querySelector('.tempo')

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
pausar.addEventListener('dblclick', resetarTempo)

let i = 0,
    timer

function iniciarTempo() {
    timer = setInterval(() => {
        tempo.innerHTML = i++
    }, 100)

    // depois que começar, seta o atributo para disabilitar o botão
    iniciar.setAttribute('disabled', '')
}

function pausarTempo() {
    // cancela o setInterval
    clearInterval(timer)

    // remove o atributo para habilitar o botão
    iniciar.removeAttribute('disabled')
}

function resetarTempo() {
    tempo.innerHTML = 0
    i = 0
}