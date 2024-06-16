//console.log(Number.isNaN());

//console.log(Number.isInteger(23));

//console.log(Number.parseFloat("234.342300000000"));

//console.log(Number.parseInt("234.342300000000"));

const preco = 10.232323;
//console.log(preco.toFixed(6));


let valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
//console.log(valor);

// ALGUNS MÉTODOS DE MATH


console.log(Math.abs(10 - 70)); //Retorna o valor absoluto
console.log(Math.ceil(23.42323)); // Arredonda para cima
console.log(Math.floor(23.34434)); // Arredonda para baixo
console.log(Math.round(22.6575)); // Arredonda para o mais próximo
console.log(Math.round(22.3575)); // Arredonda para o mais próximo
console.log(Math.max(22, 23, 24, 25, 40, 100, 200)); // Retorna o maior número
console.log(Math.round(9, 22, 23, 24, 25, 26, 45, 200, 300, 500)); // Retorna o menor número

const aleatorio = Math.floor(Math.random() * 500);
const aleatorio2 = Math.floor(Math.random() * (100 - 50 + 1) + 50); // Retorna um número aleatório entre 50 e 100

console.log(aleatorio2); // Retorna um número aleatório


// EXERCÍCIOS
// Retorne um número aleatório
// entre 1050 e 2000

const numberRandom = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(numberRandom);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 27, 8, 9';
const arrayNumeros = numeros.split(', ');
console.log(arrayNumeros);
const numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo);


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];


function limparPreco(preco) {

    preco = +preco.toUpperCase().replace("R$", " ").trim().replace(",", ".");
    preco = +preco.toFixed(2);
    return preco;

}

let soma = 0;
listaPrecos.forEach((preco, index) => {
    soma += limparPreco(preco);
});


console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
limparPreco(listaPrecos[0]);