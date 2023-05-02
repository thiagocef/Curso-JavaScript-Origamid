// Retorne no console todas as imagens do site
const allImg = document.querySelectorAll('img')
// console.log(allImg)

const todasImg = Array.from(allImg)

todasImg.forEach(imgs => {
    // console.log('mostra todas imagens', imgs)
    
    if(imgs.alt === 'lobo') {
        console.log('achamos o lobo', [imgs])
        
    }
});


//--------------------------------------------------------------
//------------------------ EXERCÍCIOS --------------------------
//--------------------------------------------------------------

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="../img/imagem"]')
console.log(imagem)


// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#"]')
console.log(linksInternos)


//// Selecione todos os links externos
const linksExternos = document.querySelectorAll('[target^="_blank"]')
console.log(linksExternos)


// Selecione o primeiro h2 dentro de .animais-descricao
const firstH2 = document.querySelector('.animais-descricao h2')
console.log(firstH2)


// Selecione o último p do site
const lastP = document.querySelectorAll('p')
console.log(lastP[lastP.length -1])


console.log('----------------------')
//------------------------------
//-------- MEUS TESTES ----------
//------------------------------


//mostrar link com length maior que 5
const linkMaior = document.querySelectorAll('a')

//tranforma o array like(linkMaior) em umm array (aMaior)
const aMaior = Array.from(linkMaior)

//varre o array
aMaior.forEach(maior => {
    const tamanho = [maior.innerText.length]
    if(tamanho > 5) {
        console.log(maior.innerText, '- Tamanho maior que 5')
    }

});