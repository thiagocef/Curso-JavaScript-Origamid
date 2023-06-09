const cep = fetch('https://viacep.com.br/ws/01001000/json/')

cep.then(resolucao => {
    // clonando resolucao
    const resolucaoClone = resolucao.clone()

    // transformando resolucao em texto
    resolucao.text().then(texto => {
        console.log(texto)
    })

    // transformando o clone de resolução em JSON
    resolucaoClone.json().then(json => {
        console.log(json)
    })
})
