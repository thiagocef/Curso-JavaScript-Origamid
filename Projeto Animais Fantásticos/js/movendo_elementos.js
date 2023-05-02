const lista = document.querySelector('.animais-lista')

const contato = document.querySelector('.contato')

const animais = document.querySelector('.animais')
//seleciona o titulo de contato
const titulo = contato.querySelector('.titulo')

//move o elemento TITULO para o elemento ANIMAIS
// animais.appendChild(titulo)


//ANIMAIS vai pra dentro da CONTATO
//e fica anter do elemento TITULO
// contato.insertBefore(animais, titulo)


const faqH1 = document.querySelector('.faq > h1')
const faq = document.querySelector('.faq')
const mapa = document.querySelector('.mapa')

//move o MAPA para FAQ, antes do FAQH1
faq.insertBefore(mapa, faqH1)


//remove o titulo de contato
// contato.removeChild(titulo)

//substitui o TITULO de CONTATO por LISTA
contato.replaceChild(lista, titulo)