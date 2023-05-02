// alert('oi') //não precisa colocar window.alert

let h1 = document.querySelector('h1')
console.log(h1.innerHTML) //retorna o que tem dentro do h1

console.log(h1.offsetHeight) //retorna a altura do elemento

console.log('----------------------')

let title = document.querySelector('.title')
console.log(title.textContent) //retorna o que tem no h1 com a classe .title

console.log(title.classList) //retorna a lista das classes do elemento


console.log('----------------------')

title.addEventListener('click', function() {
    title.innerHTML = 'Você clicou' //retorna ao clicar no h1 .title
})

//melhor forma

function clicouH1() {
    h1.innerHTML = 'Você clicou'
}

h1.addEventListener('click', clicouH1)

console.log('----------------------')

//========================================================
//====================== EXERCÍCIO =======================
//========================================================


// Retorne o url da página atual utilizando o objeto window
let url = location.href
console.log(url)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
let ativo = document.querySelector('.ativo')
console.log(ativo)

let ativoAll = document.querySelectorAll('.ativo')
console.log(ativoAll)

// Retorne a linguagem do navegador
let language = navigator.language
console.log(language)

// Retorne a largura da janela 
let largura = innerWidth
console.log(largura)