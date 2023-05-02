// let idade = [15, 12, 8, 11, 7]
let alunos = ['João', 'Pedro', 'Fábio', 'Thiago', 'Felipe']

for(let i = 0; i < alunos.length; i++) {
    
    if(alunos[i] === 'Pedro') {
        console.log(`Aluno`, alunos[i], `encontrado no índice ${[i]}`)
        break
    }
}

console.log('----------------------------')

alunos.forEach(aluno => {
    console.log(`Teste com arrow function: ${aluno}`)
});

console.log('----------------------------')

alunos.forEach(function(item) {
    console.log(item)
});

console.log('----------------------------')

for(let op = 0; op < alunos.length; op++) {
    // console.log(`Teste: ${alunos[op]}`)

    if(alunos[op] === 'Pedro') {
        console.log(`Achamos ${alunos[op]}`)
        break
    } 

}