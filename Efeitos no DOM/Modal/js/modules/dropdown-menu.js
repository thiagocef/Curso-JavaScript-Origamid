import outSideClick from "./outsideclick.js"

export default function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown')

    dropdownMenus.forEach(menu => {
        // vamos criar um array com dois tipos de eventListener
        // e criar um evento direto no array, para cada item/evento('touchstart' e 'click')
        ['touchstart', 'click'].forEach(evento => {
            menu.addEventListener(evento, handleClick)
        })
    })

    function handleClick(event) {
        event.preventDefault()
        // esse this faz referência a 'menu'
        this.classList.add('active')
        
        outSideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active')
        })
    }

}