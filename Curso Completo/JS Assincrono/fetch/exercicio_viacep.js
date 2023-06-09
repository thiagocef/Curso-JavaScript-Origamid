// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// 58043120

const inCep = document.querySelector('.in-cep'),
      btnBuscar = document.querySelector('.btn-buscar'),
      outEndereco = document.querySelector('.outEndereco')

function  buscarCep() {
    const cep = inCep.value,
          url = fetch(`https://viacep.com.br/ws/${cep}/json/`)

    url.then(resolve => {
        return resolve.json() // transforma em objeto json
    })
    .then(body => {
        console.log(body)
        outEndereco.innerHTML = `${body.logradouro}
                                \n${body.bairro}
                                \n${body.localidade} - ${body.uf}`
    })
}
btnBuscar.addEventListener('click', buscarCep)
