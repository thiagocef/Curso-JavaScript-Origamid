// ATENÇÃO
// só faz sentido usar promise
// se tiver um código assincrono dentro dela
// nesse exemplo foi passado um setTimeout
const promessa = new Promise((resolve, reject) => {
    let condicao = true
    if(condicao) {
        setTimeout(() => {
            // pode ser passado qualquer valor, inclusive objetos 
            resolve({nome: 'Thiago', idade: 38})  
            
            //vai ativar o resolve depois de 1 segundo 
        }, 1000)
    } else {
        reject(Error('ERRO ENCONTRADO NA PROMISE!'))
    }
})
/*
    THEN()
    * é um método do prototype do objeto Promise
    ** o primeiro argumento da function(), é o valor de 'resolve'

    * podem ser usados varios then encadeados(um em seguida do outro)
    ** o valor do segundo then é o retorno do then anterior, e assim por diante

    * o then() só vai ser executado, quando a promise for resolvida

    * vai retornar algo de dentro da promise
*/
/*
promessa.then(function(resolucao) {
    console.log(resolucao)
})
*/

// promessa.then((resolucao) => {
//     console.log(resolucao)
// })

/*
const retorno = promessa.then((resolucao) => {
    return 'teste'
}).then(resolucao => {
    console.log(resolucao)
})
*/

// FORMA REDUZIDA com then encadeado
const retorno = promessa
.then(resolucao => {
    resolucao.profissao = 'TI'
    return resolucao
})
.then(resolucao => {
    // neste console.log está o retorno do then anterior
    console.log(resolucao)
})
.catch(rejeitada => {
    console.log(rejeitada)
})
.finally(() => {
    console.log('Terminou')
})

/*
    catch()
    * serve para quando a promise for rejeitada
    ** quando for rejeitada, faz alguma coisa
*/

/*
    finaly()
    * vai sempre acontecer no final, independente se a promise for aceitada ou rejeitada
    ** não recebe nenhum valor como parâmetro
*/

/* 
    promise.all()
    * é um array com diferentes promessas
    ** essa promise.all só vai ser resolvida quando todas as promises do array forem resolvidas,
    ** ou pelo menos uma for rejeitada
*/

const login = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Usuário Logado')
    }, 1000)
})

const dados = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Dados Carregados')
    }, 1500)
})

const carregouTudo = Promise.all([login, dados])

carregouTudo.then(resolucao => {
    console.log(resolucao)
})

/*
    promise.race()
    * um array igual o .all
    ** porem, ele espera a primeira promise resolvida 
    ** e já mostra o resultado dessa promise que foi resolvida primeiro
*/
