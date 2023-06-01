// AQUI SERÁ IMPORTADA A FUNÇÃO DO ARQUIVO navegacao_por_tabs
// 1 - utilizando import 'nome da função' from '.caminho do arquivo ex /js/...'
// 2 - ativa a função

// obs: os scripts serão executados na ordem em que foram importatos
import initTabNav from "./modules/navegacao_por_tab.js" // importando
import initAccordion from "./modules/accordion_list.js" // importando
import initModal from "./modules/modal.js"
import iniTooltip from "./modules/tooltip.js"
import initDropdownMenu from "./modules/dropdown-menu.js"
import initAnimaNumeros from "./modules/anima-numeros.js"
// import initData from "./modules/data.js"
import initFuncionamento from "./modules/funcionamento.js"

initTabNav()
initAccordion()
initModal() 
iniTooltip()
initDropdownMenu()
initAnimaNumeros()
// initData()
initFuncionamento()