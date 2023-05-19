export default function initModal() {
}

const botaoAbrir = document.querySelector('[data-modal="abrir"]'),
      botaoFechar = document.querySelector('[data-modal="fechar"]'),
      containerModal = document.querySelector('[data-modal="container"]')


// verifica se existe, pois a pagina pode não carregar se não existir
if(botaoAbrir && botaoAbrir && containerModal) {   

    function abreFechaModal(event) {
        event.preventDefault()
        containerModal.classList.toggle('ativo')
    }   
    botaoAbrir.addEventListener('click', abreFechaModal)
    botaoFechar.addEventListener('click', abreFechaModal)

    function cliqueForaModal(event) {
        // veririca onde foi o event click(target)
        // se o click foi no containerModal(this)
        if(event.target === this) {
            abreFechaModal(event)
        }
    }
    containerModal.addEventListener('click', cliqueForaModal)
    
}