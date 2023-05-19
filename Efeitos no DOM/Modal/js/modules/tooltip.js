export default function iniTooltip() {

    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach(item => {
        item.addEventListener('mouseover', onMouseOver)
    })

    function onMouseOver(event) {
        const tooltipBox = criarTooltipBox(this) // faz referência ao item do mouseover

        // obtendo exatemente onde o mouse passou(pageY e pageX)
        tooltipBox.style.top = event.pageY + 'px'
        tooltipBox.style.left = event.pageX + 'px'

        onMouseMove.tooltipBox = tooltipBox
        this.addEventListener('mousemove', onMouseMove)// objeto callback

        onMouseLeave.tooltipBox = tooltipBox
        onMouseLeave.element = this

        this.addEventListener('mouseleave', onMouseLeave)// objeto callback
    }

    // objeto para o callback
    const onMouseLeave = {
        handleEvent() {
            this.tooltipBox.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove)
        }
    }

    // objeto para o callback
    const onMouseMove = {
        handleEvent(event) {
            this.tooltipBox.style.top = event.pageY + 20 + 'px'
            this.tooltipBox.style.left = event.pageX + 20 + 'px'
            // foi adicionado 20(px) para a caixa se distanciar do cursor

        }
    }

    function criarTooltipBox(element) {
        const tooltipBox = document.createElement('div')

        // recebe o texto de dentro do arial-label,
        // onde o mouse passou(mousover)
        const text = element.getAttribute('aria-label')
        
        tooltipBox.classList.add('tooltip')
        tooltipBox.innerHTML = text

        document.body.appendChild(tooltipBox)
        return tooltipBox
    }

}