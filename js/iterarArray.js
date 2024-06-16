/*const carros = ["Ford", "Fiat", "Honda"];

carros.forEach((item, index, array) => {
    console.log(item);
});

const li = document.querySelectorAll('li');

li.forEach((item) => item.classList.add('ativa'));*/

/* const carros = ["Fords", "Fiat", "Honda", "Kia", "Hyundai", "Chevrolet", "Toyota", "Volkswagen", "Renault", "Peugeot"];

const novaArray = carros.map((item, index, array) => {
    return item.toUpperCase();
});

console.log(novaArray); */

/*const aulas = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ];

  const tempoAulas = aulas.map((item) => {
    return item.min;
  }); */

/*const aulas = [10, 25, 30, 35, 40, 45, 43, 123, 127, 321];

const reduceAulas = aulas.reduce((acumulador, item, index, array) => {

    console.log(acumulador, item, index);
    return acumulador + item;

}, 0);*/

/*const numeros = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros.reduce((anterior, atual) => {
    return anterior > atual ? anterior : atual;
}, 0);

console.log(maiorNumero); */

/*const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, aula, index) => {

  acumulador[index] = aula.nome;

  console.log(acumulador);

  return acumulador;

}, {} );*/

const frutas = ['Banana', 'Pêra', 'Uva'];

/*const temUva = frutas.some((item) => {

  console.log(item);

  return item === "Uva";

});*/

/*const every = frutas.every((fruta) => {

  return fruta;

});

const numeros = [6, 43, 22, 88, 101, 29];

const maiorQue3 = numeros.every((fruta) => {
  
    return fruta > 3;
});

console.log(maiorQue3); */

/*const indexUva = frutas.findIndex((item, index) => {

  return item === "Uva";

});*/

//console.log(indexUva);

/*const frutas2 = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã', 'banana', 'Uva Passas', 'Uva Inglesa', 'Uva Italiana', 'Uva Brasileira'];

const arrayLimpa = frutas2.filter((item) => {

  console.log(item);

  return item;
  
  
});

console.log(arrayLimpa);*/

/*const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const maiorQue5 = aulas.filter((aula) => {
  
  return aula.min >= 20;

});

console.log(maiorQue5);*/

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll('.curso');

const arrayCursos = Array.from(cursos);

const objetosCursos = arrayCursos.map((item) => {

      const titulo = item.querySelector('h1').innerText;

      const descricao = item.querySelector('p').innerText;

      const aulas = item.querySelector('.aulas').innerText;
      
      const horas = item.querySelector('.horas').innerText;
    
      return {

      

    };

});

console.log(objetosCursos);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maioresQue100 = numeros.filter(numeros => {
  
  return numeros > 100;

});

console.log(maioresQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some((item) => {

  if(item === "Baixo" || item === "baixo") {
    return true;
  }

});

console.log(temBaixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acumulator, item) => {
  
    const precoLimpo = +item.preco.replace('R$', "").replace(',', ".");
    console.log(precoLimpo);

    return acumulator + precoLimpo;

}, 0 );

console.log(valorTotal);