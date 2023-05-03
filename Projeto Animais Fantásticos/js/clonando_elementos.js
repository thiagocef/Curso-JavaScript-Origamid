const mapa = document.querySelector('.mapa'),
      contato = document.querySelector('.contato'),
      lista = document.querySelector('.animais-lista'),
      animais = document.querySelector('.animais'),
      h1 = document.querySelector('h1'),
      faq = document.querySelector('.faq')

//CLONANDO ELEMENTO
// cloneNode()

const cloneMapa = mapa.cloneNode(true)
console.log(mapa)
console.log(cloneMapa)

contato.appendChild(cloneMapa)

const cloneH1 = h1.cloneNode(true)
console.log(h1)
console.log(cloneH1)

cloneH1.classList.add('azul')
faq.appendChild(cloneH1)