/*function Pessoa(nome, idade) {

    this.name = nome;
    this.idade = idade;

    this.abracar = function() {
        return `${this.name} deu um abraço`;
    }

}

const pessoa1 = new Pessoa('Gabriel', 25);

Pessoa.prototype.andar = function() {
    return "Pessoa andou";
}

console.log(Pessoa());

console.log(pessoa1);*/

/*const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');

const listaArray = Array.prototype.slice.call(lista);

const Carro = {
    marca: 'Ford',
    preco: 2000,
    andar(){
        return true
    }
}*/

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

const newPessoa = new Pessoa("Gabriel", "Baltar", 25);

//console.log(newPessoa.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLElement
li.click; //Function
li.innerText;   //String
li.value;   //Number
li.hidden;  //Boolean
li.offsetLeft; //Number
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
