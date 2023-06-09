// PROPRIEDADES 

// .headers

const cep = fetch('https://viacep.com.br/ws/01001000/json/')

cep.then(response => {
    console.log(response)

    response.headers.forEach(console.log)
})

// .status

cep.then(response => {
    console.log(response.status)

    // 404 = página não encontrada
    if(response.status === 200) console.log('Página encontrada')
})

// .url

cep.then(response => {
    console.log(response.url)
})

// type

cep.then(response => {
    // basic = requisição interna
    // cors = requisição externa
    console.log(response.type)
})