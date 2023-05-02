const primeiroH2 = document.querySelector('h2')
const h2Scroll = primeiroH2.getBoundingClientRect()


//quando o primeiro h2 (raposa) passar do topo da janela
if(h2Scroll.top < 0) {
    console.log('Passou do elemento')
}


if(window.innerWidth < 600) {
    console.log('tela MENOR que 600px')
}


const larguraPagina = window.matchMedia('(max-width: 500px)')

if(larguraPagina.matches) {
    console.log('Tela MENOR que 500px')
} else {
    console.log('Tela MAIOR que 500px')

}