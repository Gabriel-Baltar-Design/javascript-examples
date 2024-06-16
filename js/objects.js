const pessoa = new Object({
    nome: "Gabriel"
});

//console.log(pessoa);

const carro = {
    marca: "Marca",
    rodas: 4,
    init(valor){
        this.marca = valor;
        return this;
    },
    acelerar(){
        return this.marca + ' acelerou';
    },
    buzinar(){
        return this.marca + ' buzinou';
    }
}

const honda = Object.create(carro).init("Honda");

console.log(honda.acelerar());

const ferrari = Object.create(carro).init("Ferrari");

const jaguar = Object.create(carro).init("Jaguar");

const funcaoAutomovel = {

    acelerar() {
        return "Acelerou";
    },

    buzinar(){
        return "Buzinou";
    },

}

//const moto = {}

//Object.assign(moto, funcaoAutomovel);

//console.log(moto);

/*Object.defineProperties(moto, {

    rodas: {
        value: 2,
        configurable: false,
        writable: false
    }

});*/

const moto = {}

moto.rodas = 4;

console.log(moto);

Object.defineProperties(moto, {

    rodas: {

       get() {
        return this._rodas;
       },

       set(valor) {
        this._rodas =   valor * 4 + " rodas no total";
       }
    }

});

console.log(moto);

// Exercícios

// Crie uma função que verifique
// corretamente o tipo de dado

function verificarTipoDeDado(dado){

    return Object.prototype.toString.call(dado);

}

console.log(verificarTipoDeDado("Gabriel"));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {};

Object.defineProperties(quadrado, {

    lados: {
        value: 4,
        enumerable: true,
    }

});

// Previna qualquer mudança
// no objeto abaixo

const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
  }

  Object.freeze(configuracao);
  
  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array
  
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));