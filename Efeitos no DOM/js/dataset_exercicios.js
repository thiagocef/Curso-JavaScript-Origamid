// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.
const animaisTipos = document.querySelectorAll('.animais-tipos')
const teste = document.querySelector('.animais-tipos')

animaisTipos.forEach(item => {
    item.dataset.anime="show-down"
    item.dataset.anime="show-right"
    // console.log(item)
});

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)
function addAtributo() {
    const topo = teste.offsetTop
    if(topo == 380) {
        console.log('ok');
    }
}

window.addEventListener('scroll', addAtributo)


// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.