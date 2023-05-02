//Objeto: Carros
//possui arrays como propriedades
//possui uma função(valor) como método que retorna o valor necessário para a entrada
let carros = {
    marcas: ['Chevrolet', 'Ford', 'Renault'],
    modelo: ['Onix', 'Ka', 'Clio'],
    cores: ['Branco', 'Vermelho', 'Preto'],
    desconto: 0.30,

    valor(preco) {
        let entrada = preco * this.desconto
        return `Preço: ${preco}\n\nValor da entrada: ${entrada}`
    }
}

console.log(`Marca: ${carros.marcas[1]}\n 
Modelo: ${carros.modelo[1]}\n
Cor: ${carros.cores[2]}\n
${carros.valor(120000)}\n`)

console.log('------------------------------')

carros.marcas.forEach(function (carro) {
    console.log(`forEach`, carro)
});