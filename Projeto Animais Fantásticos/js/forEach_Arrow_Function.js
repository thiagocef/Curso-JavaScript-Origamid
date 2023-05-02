


//================================================================

const imgs = document.querySelectorAll('img')

imgs.forEach(function(img, index){
    // console.log([img], [index])
})


console.log('-----------------')
//================================================================

//Arrow Function

const listas = document.querySelectorAll('nav li')

listas.forEach((lista, index) => {
    console.log(lista, index)
})


//================================================================

console.log('-----------------')

const imagens = document.querySelectorAll('img')

imagens.forEach(imagem => {
 
    if(imagem.alt === 'macaco') { //quando achar a imagem com alt =  macaco
        imagem.src = "../img/imagem2.jpg" //troca a imagem pela imagem2
        console.log(imagem)
    }
});


//=============================================================
//======================== EXERCÍCIOS =========================
//=============================================================

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')

paragrafos.forEach(paragrafo => {
    console.log([paragrafo])
})

// Mostre o texto dos parágrafos no console
paragrafos.forEach(texto => {
    console.log(texto.innerText)
});

// Como corrigir os erros abaixo:
const images = document.querySelectorAll('img');

images.forEach((item, index) => {
  console.log([item], [index]);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

