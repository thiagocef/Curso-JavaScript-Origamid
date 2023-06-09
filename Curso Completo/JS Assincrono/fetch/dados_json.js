fetch('./dados.json')
.then(response => {
    return response.json()
})
.then(body => {
    body.forEach(item => {
        // console.log(item)
    });
})

// transformando um objeto javascript em JSON
// utilizando JSON.stringify
const configuracoes = {
    player: 'Google',
    tempo: 25.5,
    aula: '2.1 JavaScript'
}

const jsonConfig = JSON.stringify(configuracoes)
console.log(jsonConfig)

// EXEMPLO REAL
// salvando uma chave no localstorage com apenas um valor, contendo um objeto
const settings = {
    player: 'Google Play',
    tempo: 20,
    aula: '3. JavaScript'
}
// salva no localstorage um objeto em formato json
localStorage.settings = JSON.stringify(settings)

// transformando de json para objeto JS
const nowObject = JSON.parse(localStorage.settings)
console.log(nowObject)