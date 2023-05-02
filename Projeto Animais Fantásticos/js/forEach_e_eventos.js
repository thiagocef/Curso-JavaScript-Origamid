const imgs = document.querySelectorAll('img')

function eventosImg(event) {
    console.log(event.target.getAttribute('src'))
}

imgs.forEach(img => {
    img.addEventListener('click', eventosImg)
});

//-------------------------------------------------------
//------------------- EXERCÍCIO -------------------------
//-------------------------------------------------------

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linkInterno = document.querySelectorAll('a[href^="#"]')

function addAtivo(event) {

    event.preventDefault() //previne o comportamento padrão do elemento

    linkInterno.forEach(link => {
        link.classList.remove('ativo') //remove .ativo
    })

    event.currentTarget.classList.add('ativo') //add .ativo a todos os elementos
}

linkInterno.forEach(link => {
    link.addEventListener('click', addAtivo)
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *')
//todos os itens que estiverem dentro do body
// console.log(todosElementos)

function mostrarElemento(event) {
    console.log(event.currentTarget)
    //currentTarget = diz qual elemento foi clicado

}

todosElementos.forEach(elemento => {
    // elemento.addEventListener('click', mostrarElemento)
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function mostrarElemento(event) {
    console.log(event.currentTarget.remove())
    //currentTarget = diz qual elemento foi clicado
    //remove() = método que remove o elemento clicado
}

todosElementos.forEach(elemento => {
    // elemento.addEventListener('click', mostrarElemento)
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 


function aumentarTexto(tecla) {
    if(tecla.key === 't') {
        document.documentElement.classList.toggle('html-aumentar-texto')
        //document.documentElement = fala direto com o HTML

        document.body.classList.toggle('body-color')
        //document.body = fala direto com o BODY
    }
}

window.addEventListener('keydown', aumentarTexto)