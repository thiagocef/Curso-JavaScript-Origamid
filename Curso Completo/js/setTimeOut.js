// setTimeout é um método do objeto window

function espera(texto) {
    console.log(texto)
}
setTimeout(espera, 1000, 'passou 1 segundo')

// forma simplificada
setTimeout(() => {
    console.log('passou 1.5 minutos')
}, 1500)

// com loop
for(let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, 200 * i)
}

// adicionando uma classe a um elemento com o setTimeout
// utilizando THIS
const btnSet = document.querySelector('#btnSet')
btnSet.addEventListener('click', handleClick)

function handleClick() {
    setTimeout(() => {
        // o this faz referência ao btnSet
        this.classList.add('active')
    }, 1000)
}

