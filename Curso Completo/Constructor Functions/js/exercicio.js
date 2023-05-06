// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//       console.log(this.nome + ' andou');
//     }
// }

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade

    this.andar = function() {
        console.log(`${this.nome} andou`)
    }

}

// Crie 3 pessoas:
// João - 20 anos,
// Maria - 25 anos, 
// Bruno - 15 anos
//novos objetos Pessoa
const joao = new Pessoa('João', 20),
      maria = new Pessoa('Maria', 25),
      bruno = new Pessoa('Bruno', 15)

joao.andar()
maria.andar()
bruno.andar()

// Crie uma Constructor Function (Dom) para manipulação
// de elementss de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe de todos os elementos

function Dom(seletor) {
    const elementList = document.querySelectorAll(seletor)     

    //propriedade que recebe a lista dos elementos passada como parâmetro pelo "seletor"
    this.elements = elementList

    //método(função de um objeto), que recebe "classe" como parâmetro
    this.addClass = function(classe) {
        //adiciona uma classe a cada elemento
        elementList.forEach(item => {
            item.classList.add(classe)
        })
    }

    this.removeClass = function(classe) {
        elementList.forEach(item => {
            item.classList.remove(classe)
        })
    }
}

const listaItens = new Dom('li')
listaItens.addClass('ativar')