var pc = {
    ram: 6,
    cpu: 'Ryzen 5 5600X',
    armazenamento: 500,
    tipoArmazenamento: 'SSD',
    monitor: true,
    resolucao: '4k',
    teclado: false,
    mouse: false,
    preco: 10000,
    comprar: function(valor) {
        if(valor < this.preco) {
            return `Valor insuficiente. \nFalta: R$${this.preco - valor}`
        } else if(valor === 10000) {
            return `Boa compra!`
        } else {
            return `Boa compra! \nTroco: R$${valor - this.preco}`
        }
    }
}
console.log(`Seu PC possui: \n${pc.ram}gb de RAM, \nprocessador ${pc.cpu}, \n${pc.tipoArmazenamento} de ${pc.armazenamento}gb, \nmonitor com resolução em ${pc.resolucao}.`)

console.log(pc.comprar(8050))
