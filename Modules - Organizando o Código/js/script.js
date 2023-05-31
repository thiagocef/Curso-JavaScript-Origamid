// AQUI SERÁ IMPORTADA A FUNÇÃO DO ARQUIVO navegacao_por_tabs
// 1 - utilizando import 'nome da função' from '.caminho do arquivo ex /js/...'
// 2 - ativa a função

// obs: os scripts serão executados na ordem de em que foram importatos

import initTabNav from "./modules/navegacao_por_tab.js" // importando
initTabNav() // ativando

import initAccordion from "./modules/accordion_list.js" // importando
initAccordion() // ativando

// PODEM SER IMPORTADOS: 
// objetos, funções, classes, numeros, strings...
// aqui foi importado testando e senha do arquivo teste_modules.js
import { testando, senha } from "./modules/teste_modules.js"
testando()
// console.log(senha)

function espera(texto) {
    console.log(texto)
}
setTimeout(espera, 1000, 'passou 1 s')

