function somar(n1,n2){
    return n1 + n2;
}

//console.log(somar(10, 10));

function darOi(nome, idade){
    //console.log(`Oi ${nome}, tudo bem? sua idade é ${idade}`);
}

darOi.call({}, 'Gabriel', 20);



function descricraoCarro(){
    console.log(this);
    console.log(this.marca + ' ' + this.ano);
}

//descricraoCarro.call({marca: 'Fiat', ano: 2010});
//descricraoCarro.call({marca: 'Audi', ano: 2024});



/*const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach.call(carros, (item) => {
    //console.log(item);
});


function Dom(seletor){
    console.log(this);
    this.element = document.querySelector(seletor);
}

const ul = new Dom('ul');

Dom.prototype.ativo = function(classe){
    console.log(this);
    this.element.classList.add(classe);
}

const li = {
    element: document.querySelector('li')
}

Dom.prototype.ativo.call(li, 'ativo'); */

/*const frutas = ['Uva', 'Maça', 'Banana'];

Array.prototype.mostrarThis = function(){
    //console.log(this);
};

frutas.mostrarThis();

const li = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li, (item) => {
    return item.classList.contains('ativado');
});

//console.log(filtro);

const numeros = [33, 232, 33, 434, 54, 545, 56, 76, 87];

console.log(Math.max.apply(null, numeros));*/

const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
      return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
  }

  const honda = {
    marca: 'Honda'
  }

  const acelerarHonda = carro.acelerar.bind(honda);

    console.log(acelerarHonda(100, 20));


// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0);

console.log(totalCaracteres);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo){
    const element = document.createElement(tag);
    classe ? element.classList.add(classe) : null;
    conteudo ? element.innerHTML = conteudo : null;   
    return element;
}

console.log(criarElemento('div', 'ativo', 'Olá Mundo'));




// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');

console.log(h1Titulo('Curso de JavaScript'));
console.log(h1Titulo('Curso de HTML'));
console.log(h1Titulo('Curso de React'));