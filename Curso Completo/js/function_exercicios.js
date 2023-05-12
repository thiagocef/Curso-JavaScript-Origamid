// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const p = document.querySelectorAll('p'),
      arrayP = Array.from(p)

const contagemP = arrayP.reduce((count, item) => {
    // console.log(item.innerHTML.length)
    return count + item.innerHTML.length
}, 0) 
console.log(`Total de caracteres: `, contagemP)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
    const novaDiv = document.createElement(tag)

    novaDiv.classList.add(classe)
    novaDiv.innerHTML = conteudo
    novaDiv.style.color = 'red'
    // console.log(novaDiv)

    const sect = document.querySelector('section')
    console.log(sect.appendChild(novaDiv))
}
criarElemento('div', 'ativo', 'Testando função de criar novos elementos')


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
function novoTitulo (conteudo) {
    const novoH1 = document.createElement('h1')
    novoH1.classList.add('ativo')
    
    novoH1.innerHTML = conteudo
    console.log(novoH1)


}
// novoTitulo('teste tres')

// ---------------------------------------------------------
// ---------------------------------------------------------
// MELHOR FORMA - utilizando BIND()
// ---------------------------------------------------------
// ---------------------------------------------------------

// chama a função criar elemento, definindo os dois último parametros
const h1Titulo = criarElemento.bind(null, 'h1', 'titulo')

// agora passando o primeiro parâmetro
h1Titulo('testando com bind 1')
h1Titulo('testando com bind 2')
h1Titulo('testando com bind 3')