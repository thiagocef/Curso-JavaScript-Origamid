const mapa = document.querySelector('.mapa'),
      contato = document.querySelector('.contato')


//CRIANDO ELEMENTOS
//createElement()
const novoH1 = document.createElement('h1') //novo elemento
novoH1.innerText = 'Agora eu tenho um título novo' //adionado um texto ao título
novoH1.classList.add('titulo') //adicionado uma classe 
contato.appendChild(novoH1) //inserindo no documento
console.log(novoH1)

//----------------------
//----- EXERCÍCIOS -----
//----------------------
// Duplique o menu e adicione ele em copy


// Selecione o primeiro DT da dl de Faq


//outra opção
//const primeiroDt = faq.queryelector('dt')


// Selecione o DD referente ao primeiro DT


// Substitua o conteúdo html de .faq pelo de .animais


