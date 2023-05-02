// Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos através de uma função. Seu script também deve fornecer a média dos três números, através de uma segunda função que chama a primeira.

function somar(num1, num2, num3) {
    var soma = num1 + num2 + num3

    function media() {
        return `A soma é ${soma} e a média é: ${soma / 3}`
    }

    return media()

}

console.log(somar(5, 123, 4))