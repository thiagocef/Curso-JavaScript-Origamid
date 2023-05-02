const menu = document.querySelector('.menu')

menu.classList.add('ativo')
menu.classList.add('ativo', 'mobile')
menu.classList.toggle('inativo')
menu.classList.remove('mobile')




//verificando se o meu CONTEM(contains) a classe inativo
let menuTeste = menu.classList.contains('inativo') ? 'Possui' : 'Não possui'

console.log(menuTeste)

console.log('------------------')

//===========================================================
//======================= ATTIBUTES =========================
//===========================================================

const animais = document.querySelector('#faq')
//retorna os atributos do elemento com id = faq
console.log(animais.attributes)

//===========================================================
//============== getAttribute e setAttribute ================
//===========================================================

const img = document.querySelector('img')

console.log(img.getAttribute('src')) //retorna o caminho da imagem

//setando/adicionando um novo atributo
// img.setAttribute('alt', 'Raposa')
console.log(img.getAttribute('alt'))

//retorna true ou false
//se tem ou não o atributo
console.log(img.hasAttribute('id'))


console.log('------------------')


//===========================================================
//======================= EXERCÍCIOS ========================
//===========================================================
// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')

itensMenu.forEach(itens => {
    itens.classList.add('ativo')
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach(itens => {
    if(itens > itensMenu[0]) {
        itens.classList.remove('ativo')
    }
})

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img')

imagens.forEach(imagem => {
    const possuiAtributo = imagem.hasAttribute('alt')
    console.log(possuiAtributo)
});


// Modifique o href do link externo no menu
const linkExterno = document.querySelector('.menu a[href^="https"]')
linkExterno.setAttribute('href', 'https://www.instagram.com')
console.log(linkExterno)
