const controles = document.querySelector('#controles'),
      cssText = document.querySelector('.css'),
      btn = document.querySelector('.btn')

// dispara o evento a cada mudança feita nos botões
controles.addEventListener('change', handleChange)

// objeto com função(métodos]) de cada elemento
const handleStyle = {
    botao: btn,
    backgroundColor(value) {
        this.botao.style.backgroundColor = value
    },
    height(value) {
        this.botao.style.height = value + 'px'
    },
    width(value) {
        this.botao.style.width = value + 'px'
    },
    texto(value) {
        this.botao.innerHTML = value
    },
    color(value) {
        this.botao.style.color = value
    },
    border(value) {
        this.botao.style.border = value
    },
    borderRadius(value) {
        this.botao.style.borderRadius = value + 'px'
    },
    fontFamily(value) {
        this.botao.style.fontFamily = value
    },
    fontSize(value) {
        this.botao.style.fontSize = value + 'rem'
    }
}
      
// função que vai lidar com as mudanças
function handleChange(event) {
    // obtem o nome de cada evento que está sendo clicado
    const name = event.target.name
    // obtem o valor do elemento
    const value = event.target.value

    handleStyle[name](value)
    // é o mesmo que: handeStyle.backgroundColor(123)
    // ou
    // handleStyle['backgroundColor'](value)

    showCss()
}

// função para mostrar o resultado pro usurário
function showCss() {
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}