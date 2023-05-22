// AQUI SERÁ IMPORTADA A FUNÇÃO DO ARQUIVO navegacao_por_tabs
// 1 - utilizando import 'nome da função' from '.caminho do arquivo ex /js/...'
// 2 - ativa a função

// obs: os scripts serão executados na ordem de em que foram importatos

import initTabNav from "./modules/navegacao_por_tab.js" // importando
initTabNav() // ativando

import initAccordion from "./modules/accordion_list.js" // importando
initAccordion() // ativando

// importando o script do modal 
import initModal from "./modules/modal.js"
initModal()

// importando scrip do tooltip
import iniTooltip from "./modules/tooltip.js"
iniTooltip()

import initDropdownMenu from "./modules/dropdown-menu.js"
initDropdownMenu()
