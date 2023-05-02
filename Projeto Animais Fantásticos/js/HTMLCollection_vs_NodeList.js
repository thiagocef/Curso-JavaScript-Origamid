//-------------------------------------------------------
//------------- HTMLCollection vs NodeList --------------
//-------------------------------------------------------

//os dois são ARRAY LIKE
//parecem mas não são um array

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

console.log(gridSectionHTML)
console.log(gridSectionNode)

gridSectionNode.forEach(item => {
    console.log(item) //faz um loop e mostra cada item
});


//transformando um array like em um array
const arrayGrid = Array.from(gridSectionHTML)

//agora pode utilizar os métodos e propriedades de um array
console.log(arrayGrid)

arrayGrid.forEach(itens => {
    console.log(itens)
});

