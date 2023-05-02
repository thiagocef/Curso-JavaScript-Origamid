//--------------------------------------
//----------- querySelector ------------
//--------------------------------------


const primeiraLi = document.querySelector('li')
console.log(primeiraLi) //retorna a primeira li do site

const primeiraUl = document.querySelector('ul')
console.log(primeiraUl) //retorna a primeira ul do site

const linkInterno = document.querySelector('li [href^="#"]')
console.log(linkInterno) //retorna o primeiro link interno


//--------------------------------------
//---------- querySelectorAll ----------
//--------------------------------------

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg)//retorna uma NodeList e todas as img de dentro da classe .animais
console.log(animaisImg[1])//retorna o segundo elemento img de dentro da classe .animais