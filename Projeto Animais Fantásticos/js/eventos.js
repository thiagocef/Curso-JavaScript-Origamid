const img = document.querySelector('img')

function clicar() {
    // console.log('Clicou')
}

img.addEventListener('click', clicar)


//--------------------------------------------------------------

const animaisLista = document.querySelector('.animais-lista')

function callbackLista(event) {
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.type)
    console.log(event.path)
}

animaisLista.addEventListener('click', callbackLista)

//--------------------------------------------------------------

const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(evento) {
    evento.preventDefault()
    console.log('preveniu o evendo do link externo')
}

linkExterno.addEventListener('click', handleLinkExterno)

//--------------------------------------------------------------

const h1 = document.querySelector('h1')

function handleEvent(event) {
    console.log(event.type, event)
    //retorna o tipo do evento e o evento em si
}

h1.addEventListener('click', handleEvent)

// h1.addEventListener('mouseenter', handleEvent) 
//passar o mouse por cima

// h1.addEventListener('mousemove', handleEvent) 
//reconhece qualquer movimento do mouse por cima do elemento

h1.addEventListener('click', handleEvent)


//--------------------------------------------------------------

window.addEventListener('scroll', handleEvent)
//ao rolar o scroll

window.addEventListener('resize', handleEvent) 
//quando altera o tamanho da janela do navegador

window.addEventListener('keydown', handleEvent)
//quando uma tecla for clicada

//---------------------------------------------------------------
//------------------------ ECERCÍCIOS ---------------------------
//---------------------------------------------------------------

function teclar(evento) {
    if(evento.key === 'a') {
        console.log('Teclou a')
    } else if (evento.key === 'b') {
        console.log('Teclou b')
    }
}

window.addEventListener('keydown', teclar)

//---------------------------------------------------------------

function darkMode(dark) {
    //se teclar 'd'
    if(dark.key === 'p') {
        document.body.classList.toggle('preto')
        //o boy recebe a classe .preto
    }
}

window.addEventListener('keydown', darkMode)