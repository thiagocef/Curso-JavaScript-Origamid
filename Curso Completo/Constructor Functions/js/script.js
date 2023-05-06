//objeto para manipular o DOM
// const Dom = {
//     seletor: 'li',
//     element() {
//         const elementoSelecionado = document.querySelector(this.seletor)
//         return elementoSelecionado
//     },
//     ativar() {
//         this.element().classList.add('ativado')
//     }
// }
// Dom.seletor = 'ul'
// Dom.ativar()

//função construtor
// recebe um seletor css como parâmetro, na criação do new objeto Dom

function Dom(seletor) {
    //vai referencias o doc html de acordo com o seletor que foi passado como parâmetro
    const element = document.querySelector(seletor)
    
    //this referencia 'seletor' passado como parâmetro no new objeto
    this.ativo = function(classe) {
        element.classList.add(classe)
    }
}

//cria um novo objeto do construtor
//passando um seletor css como parâmetro
//em seguida, ativa a função "ativo", passando o nome de uma classe como parâmetro
const lista = new Dom('ul')
lista.ativo('ativo')

const lastLi = new Dom('li:last-child')
lastLi.ativo('outra-classe')