var soma = 100 + 50,
    subtracao = 100 - 50,
    multiplicacao = 100 * 2,
    divisao = 100 / 2,
    expoente = 2 ** 4,
    modulo = 14 % 5 //resto da divisão de 14/5
    numero1 = 10,
    numero2 = 4
var resto

resto = numero1 % numero2 ? 'impar' : 'par'
console.log(resto)

//INCREMENTO
var incremento = 5
console.log(++incremento)

//TRANSFORMANDO UMA STRING NUMÉRICA EM NUMBER
var idade = '37' //string numérica
console.log(typeof(+idade)) //tranforma o tipo em number


//=============================================================
//======================== EXERCÍCIOS =========================
//=============================================================

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20; //35

// Crie duas expressões que retornem NaN
var nome = 'thiago' / 5
console.log(nome)

// Somar a string '200' com o número 50 e retornar 250
var valor = +'200' + 50
console.log(valor)

// Incremente o número 5 e retorne o seu valor incrementado
var valor2 = 5
++valor2 //ou direto console.log(++valor2)
console.log(valor2)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

numero = +'80'
peso = numero + unidade
pesoPorDois = peso / 2
console.log(pesoPorDois)
