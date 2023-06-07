const meuCep = '32323321'


const cep = fetch('./style.css')

const conteudo = document.querySelector('.conteudo')

/*
    .json
    *tranformando em .json(objeto)
*/
cep.then(resolucao => resolucao.text())
.then(body => {
    // body.cep = '123456'
    // conteudo.innerHTML = body.cep
    conteudo.innerHTML = body
    const style = document.createElement('style')
    style.innerHTML = body

    conteudo.appendChild(style)
})
