var corFavorita = 'Amarelo'

switch (corFavorita) {
    case 'Azul':
        console.log('Azul é a cor favorita')
        break
    case 'Vermelho':
        console.log('Vermelho é a cor favorita')
        break
    case 'Amarelo':
        console.log('Amarelo é a cor favorita')
        break
    default:
        console.log('Cor não encontrada')
}

//================================================
//================= EXERCÍCIOS ===================
//================================================

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 37,
    parenteIdade = 30

if (minhaIdade > parenteIdade) {
    console.log('Você é mais velho')
} else if (parenteIdade > minhaIdade) {
    console.log('Você é mais novo')
} else {
    console.log('Você tem a mesma idade do seu parente')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// 3(true) && false && 3(true)
console.log(expressao)

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false - undefined
var dinheiroNaConta = 0; //false
console.log(!!nome)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}