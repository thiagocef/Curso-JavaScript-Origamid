// ESTE ARQUIVO É O MÓDULO QUE SERÁ IMPORTADO NO SCRIPT PRINCIPAL
// portanto, teremos que EXPORTAR algo daqui
// no caso, será exportada a função initTabNav()

/*
É RECOMENDANDO EXPORTAR APENAS UMA FUNÇÃO por vez, utilizamos o 'default':
    - export default function (){}...
        a função NÃO será ativada neste arquio, mas no script principal
*/


//dando dinamismo às imagens do site
//OBS: foi criada uma nova classe chamada "js" para fazer a referência aos elementos sem alterar as classes anteriores

//função init apenas para isolar este script 
//para não dar conflito nos scripts seguinte
export default function initTabNav() {
    //selecionando cada li do pai js-tabmenu
    //e cada section do pai js-tabcontent
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li'),
          tabContent = document.querySelectorAll('[data-tab="content"] section')

    //a página sempre vai iniciar com esse elemento a mostra
    tabContent[0].classList.add('ativo')

    //função que insere a classe 'ativo'
    function activeTab(index) {
        //remove se houver a classe
        tabContent.forEach(section => {
            section.classList.remove('ativo')
        })
        // adicionando animacao com dataset
        // não é necessário essa abordagem. pode ser feito pelo css
        const direcao = tabContent[index].dataset.anime

        //adiciona se não houver
        tabContent[index].classList.add('ativo')
    }

    //os index de tabMenu e tabContent foram organizados na mesma sequência
    tabMenu.forEach((itemMenu, index) => {
        //adiciona um evento para cada item, retornando o index de cada um
        //chama a função callback, que ativa a função activeTab, baseado no index
        itemMenu.addEventListener('click', () => {
            activeTab(index)
        })    
    });
}

// a função foi exportada e chamada no script principal
// initTabNav()