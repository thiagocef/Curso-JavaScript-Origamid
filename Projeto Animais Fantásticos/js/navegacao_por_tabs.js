//dando dinamismo às imagens do site
//OBS: foi criada uma nova classe chamada "js" para fazer a referência aos elementos sem alterar as classes anteriores

//função init apenas para isolar este script 
//para não dar conflito nos scripts seguinte
function initTabNav() {
    //selecionando cada li do pai js-tabmenu
    //e cada section do pai js-tabcontent
    const tabMenu = document.querySelectorAll('.js-tabmenu li'),
          tabContent = document.querySelectorAll('.js-tabcontent section')

    //a página sempre vai iniciar com esse elemento a mostra
    tabContent[0].classList.add('ativo')

    //função que insere a classe 'ativo'
    function activeTab(index) {
        //remove se houver a classe
        tabContent.forEach(section => {
            section.classList.remove('ativo')
        })
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

initTabNav()