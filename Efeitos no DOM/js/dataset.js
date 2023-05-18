// DATASET
// cria propriedades específicas para cada elemento do html
// ex:
// <div data-exemplo='valor'>exemplo</div>
// para selecionar o elemento pelo atributo criado
// const div = documente.querySelector('[data-exemplo]')

const div = document.querySelector('[data-cor]')
console.log(div.innerHTML);

// criando nova propriedade
div.dataset.hight = 1000


// para deletar uma propriedade
delete div.dataset.hight
console.log(Object.prototype.toString.call(div))