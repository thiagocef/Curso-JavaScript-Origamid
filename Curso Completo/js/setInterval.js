// funciona como um loop
// a cada tempo, realiza algo

// let i = 0
// setInterval(() => {
//     console.log(i++)
// }, 300)

// EXERCICIOS

// Mude o background para azul e depois para vermelho a cada 1.5s
const bgH3 = document.querySelector('.change-bg')
function mudaCor() {
    bgH3.classList.toggle('active')
}
setInterval(mudaCor, 1500)