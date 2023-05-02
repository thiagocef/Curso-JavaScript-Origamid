//===========================================================
//==================== FUNCTION_SWITCH ======================
//================ Calculando dois Números ==================
//===========================================================

//soma
function somar (numero1, numero2) {
    return numero1 + numero2
}
//subtração
function subtrair (numero1, numero2) {
    return numero1 - numero2     
}
//multiplicação
function multiplicar (numero1, numero2) {
    return numero1 * numero2     
}
//divisão
function dividir (numero1, numero2) {
    return numero1 / numero2     
}
//menu
console.log('Escolha a operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair')
console.log('------------------')

//condições
let operacao = ' '
if (isNaN(operacao) || operacao == '' || operacao.length == 0) {
    console.log('Informe um valor numérico válido')
} else {

    switch (operacao) {
        case 1:
            console.log('A soma é:', somar(20, 10))
            break
        case 2:
            console.log('A subtração é:', subtrair(20, 10))
            break
        case 3:
            console.log('A multiplicação é:', multiplicar(20, 10))
            break
        case 4:
            console.log('A divisão é:', dividir(20, 10))
            break
        case 5:
            console.log('saindo...')
            break
        default:
            console.log('Opção inválida!!\nEscolha entre as opções válidas')
    }  
}