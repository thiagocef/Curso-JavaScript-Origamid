const mapa = document.querySelector('.mapa')
const contato = document.querySelector('.contato')

//criando o novo elemento
const novoH1 = document.createElement('h1')
//adicionando um conteúdo 
novoH1.innerText = 'Novo Título'
//adicionando uma classe
novoH1.classList.add('titulo')

//inserindo o elemento ao DOM
// mapa.appendChild(novoH1)

//insere novoH1 em .contato, antes do mapa
// contato.insertBefore(novoH1, mapa)
// console.log(novoH1)



//----------------------
//----- EXERCÍCIOS -----
//----------------------
// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const menuClone = menu.cloneNode(true)

copy.appendChild(menuClone)


// Selecione o primeiro DT da dl de Faq
const dtLista = document.querySelector('.faq dt')
console.log(dtLista)

//outra opção
//const primeiroDt = faq.queryelector('dt')


// Selecione o DD referente ao primeiro DT
console.log(dtLista.nextElementSibling)

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML

