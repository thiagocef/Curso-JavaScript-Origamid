export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]'),
        diasSemana =  funcionamento.dataset.semana.split(',') .map(Number),
        // obtem o atributo data
        // transforma em array com o split
        // trasforma em números com o map(Number)   
        horarioSemana = funcionamento.dataset.horario.split(',') .map(Number)

    console.log(diasSemana)
    console.log(horarioSemana)

    const dataAgora = new Date(),
        diaAgora = dataAgora.getDay(),
        horarioAgora = dataAgora.getHours()

    // verificando o dia da semana 
    // se consta nos dias em que está aberto [1,2,3,4,5]
    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1

    // verificando o horário da semana/dia 
    // se consta no horário em que está aberto [8,18]
    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1])

    // adicionando uma classe caso esteja aberto
    if(semanaAberto && horarioAberto) {
        funcionamento.classList.add('aberto')
    }
}