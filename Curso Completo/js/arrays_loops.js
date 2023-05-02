//LOOPS E ARRAY

let videoGames = ['Switch', 'PS4', 'Xbox', 'Nintendo']

for (let item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item])
}

console.log('---------------------------')
//BREAK para parar o loop

let carros = ['Gol', 'Celta', 'UP', 'Polo']

for (let item = 0; item < carros.length; item++) {
    console.log(carros[item])
    if (carros[item] === 'UP') {
        break //vai parar o loop quando achar o item = 'UP'
    }
}