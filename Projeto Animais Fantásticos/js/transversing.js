const lista = document.querySelector('.animais-lista')

//retorna o pai do elemento lista
console.log(lista.parentElement)

//retorna o pai do pai, e assim sucessivamente
console.log(lista.parentElement.parentElement)

//retorna o próximo elemento após o elemento lista(no mesmo nível)
console.log(lista.nextElementSibling)

//retorna o elemento anterior ao elemento lista(no mesmo nível)
console.log(lista.previousElementSibling)

//retorna uma html colection com os filhos do elemento
//podendo ser acessados cada um deles assim: lista.children[1]
console.log(lista.children)

//retorna o primeiro filho do elemento lista
console.log(lista.querySelector('li'))

//retorna o ultimo filho do elemento lista
console.log(lista.querySelectorAll('li:last-child'))
