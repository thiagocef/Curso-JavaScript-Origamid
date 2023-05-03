const lista = document.querySelector('.animais-lista'),
      contato = document.querySelector('.contato'),
      titulo = document.querySelector('.contato > .titulo'),
      animaisTipos = document.querySelector('.animais-tipos'),
      animais = document.querySelector('.animais'),
      mapa = document.querySelector('.mapa')

//MOVENDO OS ELEMENTOS
//mover o titulo para a lista
//primeiro seleciona para onde deseja enviar = lista, animais
//no argumento vai o que deseja enviar = titulo, contato
// lista.appendChild(titulo)
// animais.appendChild(contato)

//primeiro seleciona para onde deseja enviar = contato(elemento pai) 
//o primeiro argumento é o que deseja mover = lista
//o segundo argumento é o elemento que deseja colocar antes = titulo
//lista vai ser movido para antes do titulo do pai contato
// contato.insertBefore(lista, titulo)

//mapa vai ser movido para antes da lista do pai animais
animais.insertBefore(mapa, lista)
