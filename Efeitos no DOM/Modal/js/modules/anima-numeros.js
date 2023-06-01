export default function initAnimaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]')

    numeros.forEach((numero) => {
        const total = +numero.innerHTML, // obtem o innerHTML de cada elemento em formato numérico
            incremento = Math.floor(total / 100) 

        let start = 0

        const timer = setInterval(() => {
            start = start + incremento
            numero.innerHTML = start // terminar com o valor total 

            if(start > total) {
                numero.innerHTML = total
                clearTimeout(timer) // para a contagem quando start for maor que total 
            }
        }, 20)
    })

}

// TESTAR EM OUTRO PROJETO - aqui não funcionou
// ver a aula novamente
// ativando a contagem quando aparecer na tela
function ativarMutacao() {
    console.log('mutou')
}

// será usado o MutationObserver (ele é um observador de mutação, quando algo acontecer)
// ele vai observar o target(elemento) desejado
const elementoObservado = document.querySelector('.numeros'),
      observador = new MutationObserver(ativarMutacao)

observador.observe(elementoObservado, {attributes: true})