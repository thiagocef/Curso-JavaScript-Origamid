const lista = document.querySelector('.animais-lista'),
      contato = document.querySelector('.contato'),
      titulo = document.querySelector('.contato > .titulo'),
      animaisTipos = document.querySelector('.animais-tipos'),
      animais = document.querySelector('.animais'),
      mapa = document.querySelector('.mapa')


//REMOVENDO ELEMENTOS
//remove o titulo de dentro de contato
// contato.removeChild(titulo)

//SUBSTITUINDO ELEMENTOS
//primeito seleciona o pai = contato
//o mapa vai ser substituído por lista, dentro de contato
contato.replaceChild(lista, mapa)
console.log(contato)