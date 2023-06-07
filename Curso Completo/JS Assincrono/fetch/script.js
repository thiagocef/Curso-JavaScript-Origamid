/*
    fetch API
    * faz requisições HTTP
    ** retorna uma promise
    *** utiliza o then para interagir com a respota(objeto do tipo Response)
*/
const doc = fetch('./teste.txt') // faz a requisição e retorna uma promise

/*
    Response
    * o conteúdo de response é o que interessa
    ** esse conteúdo deve ser transformado
*/

// resolucao é o argumento que faz referencia ao 'resolve' da promise doc
doc.then(resolucao => {
    // transforma o conteúdo de Responde em texto
    return resolucao.text()
})
.then(body => { // body recebe resolucao.text()
    const conteudo = document.querySelector('.conteudo')
    conteudo.innerHTML = body
    console.log(body)
})