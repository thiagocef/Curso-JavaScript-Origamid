//=================================================================
//========== Funções, propriedades e métodos dos objetos ==========    
//=================================================================

let nome = 'Thiago'

console.log(nome.charAt(0)) //retorna o caracter na posição 0
console.log(nome.toUpperCase()) //retorna tudo em maiúsculo
console.log(nome.length) //retorna tamanho da variável


let altura = 1.8

console.log(altura.toFixed(2))
console.log(altura.toString()) //transforma em string


//=========================================================
//====================== EXERCÍCIOS =======================
//=========================================================
// nomeie 3 propriedades ou métodos de strings
let carro = 'Corola'

console.log(carro.length)
console.log(carro.slice())

// nomeie 5 propriedades ou métodos de elementos do DOM
let btn = document.querySelector('.btn')

btn.addEventListener('click', function(){
    console.log('Clicou')
    console.log(btn.className) //mostra o nome das classes que possui
    console.log(btn.value)
    console.log(btn.type)
    console.log(btn.outer)

})

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
