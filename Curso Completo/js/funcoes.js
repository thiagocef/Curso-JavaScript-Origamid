function areaQuadrado (lado) {
    return lado * lado
}
console.log('A área do quadrado é: ', areaQuadrado(4))


//===================================================
function imc (peso, altura) {
    var pesoIdeal = peso / (altura * altura)
    return pesoIdeal.toFixed(2)
}
console.log('Seu peso ideal é: ', imc(80, 1.80))


//===================================================
function corFavorita (cor) {
    if (cor === 'Azul') {
        return 'Cor favorita é Azul'
    } else if (cor === 'Amarelo') {
        return 'Cor favorita é Amarelo'
    } else {
        return 'Cor não encontrada'
    }
}
console.log(corFavorita('Azul'))


//===================================================
//==================== CALLBACK =====================

addEventListener ('click', function(){ //chama a função callback após o evento click
    console.log('Você clicou')
})

//tem o mesmo effeito de:
function mostraConsole () {
    console.log('Você deu scroll no mouse')
}
addEventListener('scroll', mostraConsole)


//===================================================
//=============== Função sem return =================

function calcularImc (kg, alt) {
    const imc = kg / (alt * alt)
    console.log(imc.toFixed(2))
}
calcularImc(72, 1.70) //returna o imc
console.log(calcularImc(72, 1.70)) //returna o imc e undefined

//a função pode retornar qualquer tipo de dado
//o ideal é que a função retorne sempre o mesmo tipo

function terceiraIdade (idade) {
    if (typeof idade !== 'number') { //se for diferente de number
        return '[[ERRO]]'
    } else if (idade >= 60) {
        return true
    } else {
        return false //quando bate no return, nada mais acontece após isso
    }
}
console.log(terceiraIdade(61))

//===================================================
//===================== Escopo ======================

function faltaVisitar (visitei) {
    var totalPaises = 193
    return `Falta visitar ${totalPaises - visitei} países`
}

console.log(faltaVisitar(3))

//===================================================
//===================== Escopo ======================

var work = 'TI' //variável global

function data () {
    var name = 'Thiago' //variáveis locais
    var age = 37        //no escopo da função data
                        //mas pode ser acessada pela função otherDatas

    function otherDatas() {
        var address = 'João Pessoa'  //variáveis locais
        var age = 35                 //no escopo da função otherDatas
                                     //mas pode ser acessar as variáveis externas
        return `Meu nome é ${name}, tenho ${age} anos, moro em ${address} e trabalho com ${work}`
    }
    return otherDatas()
}
console.log(data())

//===========================================================
//====================== EXERCÍCIOS =========================
//===========================================================

// Crie uma função para verificar se um valor é Truthy
function verificarTrue(valor) {
    if(!!valor === true) { // !! verifica se o valor é true ou false
        return true
    } else {
        return false
    }
}
console.log('O valor é:', verificarTrue(0))


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
    return lado * 4
}
console.log('O perímetro é: ', perimetroQuadrado(5))


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName(firstName, lastName ) {
    return `My full name is ${firstName} ${lastName}`
}
console.log(fullName('Thiago', 'Cordeiro'))


// Crie uma função que verifica se um número é par
function checkNumber (num) {
    if(num % 2 === 0) {
        return `O número ${num} é par`
    } else {
        return `O número ${num} é impar`
    }
}
console.log(checkNumber(2))


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function retornarTipo(tipo) {
    return typeof tipo
}
console.log('O argumento é do tipo:', retornarTipo(4))


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function nomeClick() {
    console.log('Thiago Cordeiro')
})


// Corrija o erro abaixo
var totalPaises = 193; //corrigindo o local da variável
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
// var totalPaises = 193; a variável estava aqui

  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
} 
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
  