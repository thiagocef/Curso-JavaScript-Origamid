export default function initData() {

}

const agora = new Date() // obtem a data e hora atuais do computador
const futuro = new Date('January 4 2024 00:01') // seta uma data especifica

// função para converter milisegundos em dias
function converterEmDias(tempo) {
    return tempo / (24 * 60 * 60 * 1000)
    // tempo / horas * minutos * segundos * milissegundos
}
const diasAgora = converterEmDias(agora)
const dataFuturo = converterEmDias(futuro)

const faltam = dataFuturo - diasAgora
console.log(Math.floor(faltam))