// Faça um programa que recebe três números do usuário, e identifica o maior através de uma função e o menor número através de outra função.
function maior(num1, num2, num3) {
    if ((num1 === num2) || (num1 === num3)) {
        return `Há números iguais`
    } else {

        if((num1 > num2) && (num1 > num3)) {
            return `${num1} é o maior`
        } else if ((num2 > num1) && (num2 > num3)) {
            return `${num2} é o maior`
        } else if ((num3 > num1) && (num3 > num2)){
            return `${num3} é o maior`
        } else {
            return `Há números iguais`
        }
    }
}
console.log(maior(4, 5, 6))