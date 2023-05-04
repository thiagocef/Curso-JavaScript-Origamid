//função init apenas para isolar este script 
//para não dar conflito nos scripts seguinte
function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt'),
          activeClass = 'ativo' //constante que recebe o nome da classe '.ativo' do css

    //já inicia(sem necessidade de click)
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion() {
        //ao invés de usar (event)... event.target
        //usaremos o "THIS" que faz referência ao item clicado no accordionList

        //adiciona ou remove uma classe ao this(item do accordionList) 
        this.classList.toggle(activeClass)

        //adiciona ou remove uma classe ao próximo elemento do this(item do accordionList) 
        this.nextElementSibling.classList.toggle(activeClass)
    }

    accordionList.forEach(item => {
        item.addEventListener('click', activeAccordion)
        //o this da função vai fazer referência a esse item do forEach
        
    })
}

initAccordion()