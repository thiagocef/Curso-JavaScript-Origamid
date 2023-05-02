var nome = `Thiago`
var idade = 37
var possuiFaculdade = true

console.log(nome, idade, possuiFaculdade)

var preco = 25
var totalComprado = 5
var totalPreco = totalComprado * preco

console.log(totalPreco)

var sobrenome = 'Rafael',  cidade = 'Rio'
console.log(sobrenome, cidade)

var altura = 170,
    peso = 72
    total = (peso * peso) / altura
console.log(total.toFixed(2))

//===================================================
//===================== Escopo ======================

var work = 'TI' //variável global

function data () {
    var name = 'Thiago' //variáveis locais
    var age = 37        //do escopo da função data
                        //mas pode ser acessada pela função otherDatas

    function otherDatas() {
        var address = 'João Pessoa'  //variáveis locais
        var age = 35                 //do escopo da função otherDatas
                                     //mas pode ser acessar as variáveis externas
        return `${name}, ${age}, ${address}, ${work}`
    }
    return otherDatas()
}

//===================================================================
//========================== EXERCÍCIOS =============================
//===================================================================

//declarar uma variável com seu nome, idade, comidaFavorita(sem atribuir valor)
var nome = 'Thiago'
var idade = 37
var comidaFavorita
//atribuir valor a variavel comidaFavorita
var comidaFavorita = 'Feijoada'
//5 variáveis diferentes sem valores
var tipoCarro,
    marca,
    modelo,
    ano,
    valor