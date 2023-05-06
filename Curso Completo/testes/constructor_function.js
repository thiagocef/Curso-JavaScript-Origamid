//Função construtora cria novos objetos sempre que é invocada

//sempra iniciar o nome com letra maiúscila(Pascal Case)
//recebendo os parâmetros com nome e preço
function Carro(marcaAtribuida, precoAtribuido) {
    //this faz referência à própria função
    //que recebe os parâmetros
    this.marca = marcaAtribuida
    this.preco = precoAtribuido

}

//new cria um novo objeto(vazio) dentro da função Carro
const honda = new Carro('Honda', 2000)
const fiat = new Carro('Fiat', 4000)
//foi passado os parâmetros com nome e preco

//----------------------------------------------------

function Carro2(marca, precoInicial) {
    const taxa = 1.2
    const precoFinal = precoInicial * taxa

    //this faz referência à própria função
    //que recebe os parâmetros
    this.marca = marca
    this.preco = precoFinal

    console.log(this.marca, this.preco)
}
//novo objeto passando a marca e o preço inicial para a função construtor
const mazda = new Carro2('Mazda', 5000),
      gm = new Carro2('GM', 7000)

Carro2()