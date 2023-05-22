// função de clicar fora do elemento
export default function outSideClick(element, events,  callback) {
    // selecionando o documento HTML
    const html = document.documentElement,
          outside = 'data-outside'

    // esta é uma verificação EXTRA
    // para evitar que vários eventos sejam disparados
    if(!html.hasAttribute(outside)) {  
        events.forEach(userEvent => {
            html.addEventListener(userEvent, handleOutsideClick)
        });
        element.setAttribute(outside, '')
    }

    function handleOutsideClick(event) {
        if(!element.contains(event.target)) {
            element.removeAttribute(outside)

            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick)
            })
            callback()
        }
    }
}