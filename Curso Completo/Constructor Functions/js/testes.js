// CRIAR UMA CALCULADORA DE IMC
// IMC = Peso dividido pela altura ao quadrado ( peso/altura²)
// OU peso dividido pela a altura vezes a altura ( peso ÷ (altura x altura)).

// recebe os argumentos passados na criaçãod dos novos objetos new Imc()
function Imc(nome, peso, altura) {
    // propriedades
    this.nome = nome,
    this.peso = peso,
    this.altura = altura

    // método
    this.calcularImc = function() {
        const imc = this.peso / (this.altura * this.altura)
        console.log(`O IMC de ${this.nome} é: ${imc.toFixed(2)}`)
    }
}

// criando objetos para a função
// const pessoa1 = new Imc('Thiago', 70, 1.7)
// pessoa1.calcularImc()

// const pessoa2 = new Imc('Luiza', 50, 1.54)
// pessoa2.calcularImc()

// ----------------------------------------------
// ----------------------------------------------
//CRIAR OBJETO POSTAGEM

function Postagem(titulo, mensagem, autor) {
    let info = ''

    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.live = true,

    this.exibirInfo = function() {
        const live = this.live ? 'AO VIVO' : 'OFF'

        info += `Título: ${titulo} 
                \nMensagem: ${mensagem} 
                \nAutor: ${autor} 
                \nLive: ${live}`

        console.log(info)
    }

}
const postagem = new Postagem('Meu Novo Vídeo', 'Este vídeo é para você', 'Thiago Cordeiro')
postagem.exibirInfo()
