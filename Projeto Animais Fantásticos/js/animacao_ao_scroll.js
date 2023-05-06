const sections = document.querySelectorAll('.js-scroll')

// verifica se existe a section
// if(sections.length) {

    //calculando a metade da tela do usuário
    
    const windowMetade = window.innerHeight * 0.55

    //função para animação
    function animaScroll() {
        sections.forEach((section) => {
            // obtendo a distancia entre cada elemento e o topo da página
            const sectionTop = section.getBoundingClientRect().top,
                  sectionVisible = (sectionTop - windowMetade)
                
            if(sectionVisible < 0) {
                section.classList.add('ativo')

            } 
        })
    }

    animaScroll()
    
// }
window.addEventListener('scroll', animaScroll)