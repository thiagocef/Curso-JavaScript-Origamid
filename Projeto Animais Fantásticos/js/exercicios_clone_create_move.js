const mapa = document.querySelector('.mapa'),
      contato = document.querySelector('.contato'),
      lista = document.querySelector('.animais-lista'),
      animais = document.querySelector('.animais'),
      h1 = document.querySelector('h1'),
      faq = document.querySelector('.faq'),
      menu = document.querySelector('.menu'),
      copy = document.querySelector('.copy'),
      faqLista = document.querySelector('.faq-lista')

// Duplique o menu e adicione ele em copy
const novoMenu = menu.cloneNode(true)
copy.appendChild(novoMenu)

// Selecione o primeiro DT da dl de Faq
const dt = document.querySelector('dt')
console.log(dt.innerHTML)

// Selecione o DD referente ao primeiro DT
console.log(dt.nextElementSibling.innerHTML)

// Substitua o conteúdo html de .faq pelo de .animais
faq.innerHTML = animais.innerHTML
