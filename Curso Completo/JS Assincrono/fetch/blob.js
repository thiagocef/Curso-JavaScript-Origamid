const imagem = fetch('./perfil-01.png')

// fazendo a requisição de uma imagem
imagem.then(resolucao => {
    return resolucao.blob()
})
.then(body => {
    // criando uma URL para acessar a imagem
    const imgUrl = URL.createObjectURL(body)

    const imgDom = document.querySelector('img')

    // adicionando a imagem ao DOM
    imgDom.src = imgUrl
})
