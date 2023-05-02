let imovel = {
    quartos: 2,
    sala: true,
    cozinha: true,
    banheiro: 1,
    varanda: false,
    mobilia: false,
    tipo: ['Apartamento', 'Casa'],
    forma: ['Aluguel', 'Venda'],
    cliente: function(opTipo, opForma) {
        if ((opTipo === 0) && (opForma === 0)) {
            return `${this.forma[0]} de ${this.tipo[0]} `

        } else if ((opTipo === 1 && (opForma === 1))) {
            return `${this.forma[1]} de ${this.tipo[1]}`

        } else if ((opTipo === 1) && (opForma === 0)) {
            return `${this.forma[1]} de ${this.tipo[0]} `

        } else if ((opTipo === 0) && (opForma === 1)) {
            return `${this.forma[0]} de ${this.tipo[1]} `
            
        } else {
            return `Opção Inválida`
        }
    }
}

console.log(imovel.cliente(1, 1))