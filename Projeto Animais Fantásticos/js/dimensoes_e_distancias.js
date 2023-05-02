// const listaAnimais = document.querySelector('.animais-lista')

// const altura = listaAnimais.clientHeight
// console.log(altura)

// const largura = listaAnimais.clientWidth
// console.log(largura)

// const alturaBorder = listaAnimais.offsetHeight
// console.log(alturaBorder)

// const alturaScroll = listaAnimais.scrollHeight
// console.log(alturaScroll)

// const animaisTop = listaAnimais.offsetTop
// console.log(animaisTop)

// const animaisLeft = listaAnimais.offsetLeft
// console.log(animaisLeft)
 
// const primeiroH2 = document.querySelector('h2')
// const h2Left = primeiroH2.offsetHeight
// console.log(h2Left)

// const rect = primeiroH2.getBoundingClientRect()
// console.log('left:', rect.left)

console.log('------------')
console.log('-EXERCÍCIOS-')
console.log('------------')

//===========================================================
//======================= EXERCÍCIOS ========================
//===========================================================

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img')
const imgTop = primeiraImg.offsetTop
console.log(imgTop)

console.log('------------')

// Retorne a soma da largura de todas as imagens
function somarImagens() { 
    const larguraImagens = document.querySelectorAll('img')
    let soma = 0

    larguraImagens.forEach(imagem => {
        soma += imagem.offsetWidth
    });
    console.log(soma)
}
window.onload = function() {
    somarImagens()
}

console.log('------------')
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a')

links.forEach(link => {
    if((link.offsetWidth >= 48) && (link.offsetHeight >= 48)) {
        console.log(link, 'Possui boa acessibilidade')
    } else {
        console.log(link, 'Não possui boa acessibilidade')
    }

});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
if(window.innerWidth < 700) {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('menu-mobile')
}