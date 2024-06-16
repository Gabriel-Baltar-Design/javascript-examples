//const carros = new Array("Ford", "Fiat", "Honda");
//console.log(carros);

//carros[2] = "Ferrari";
//console.log(carros.length);
const addButton = document.querySelector('button');
console.log(addButton);

const activeButton = addButton.addEventListener('click', addNewUser);

function addNewUser() {
    const newLi = document.querySelectorAll('.lista-alunos');
    newLi.forEach((item, index) => {
        item.innerHTML = `Botão Clicado ${index + 1}`;
    });
}

const allAlunos = document.querySelectorAll('.lista-alunos');
console.log(allAlunos);

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li); // Transforma um NodeList (li) do html em um array

const object = {

    0: "Gabriel",
    1: "Baltar",
    2: "Janete",
    3: "Izaias",
    4: "Joaquim",
    length: 5,
}

const arrayObject = Array.from(object); // Transforma um objeto (object) em um array

//console.log(Array.isArray(arrayLi));

//console.log(arrayLi);

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
//console.log(frutas.length);

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
//console.log(instrumentos);

const carros = ["Ford", "Fiat", "Honda"];

carros.unshift("Kia", "Ferrari"); // Adiciona itens no início do array
//console.log(carros);

carros.push("Fusca", "Gol"); // Adiciona itens no final do array
//console.log(carros);

carros.pop(); // Remove o último item do array
//console.log(carros);

carros.shift(); // Remove o primeiro item do array
//console.log(carros);

carros.reverse(); // Inverte a ordem dos itens do array
//console.log(carros);

//console.log(carros);

carros.splice(2, 0, "Porshe", "Audi"); // Adiciona itens no index que adicionamos do array

//console.log(carros);

const arrayModificado = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"].copyWithin(3, 3, 4); // Copia os itens do array para o index que passamos

//console.log(arrayModificado);

arrayModificado.fill("Banana", 2, 4); // Preenche os itens do array com o valor que passamos

//console.log(arrayModificado);

const transporte1 = ["Barco", "Avião"];
const transporte2 = ["Carro", "Moto"];

const transportes = transporte1.concat(transporte2); // Concatena os arrays

//console.log(transportes);

const verificaArray = transportes.includes("Carro"); // Verifica se o array possui o item que passamos = Retorna true
const verificaArray2 = transportes.includes("carro");   // Verifica se o array possui o item que passamos = Retorna false

const localizaPosicao = transportes.indexOf("Carro"); // Localiza a posição do index no array do item que passamos
//console.log(localizaPosicao);

//console.log(verificaArray);
//console.log(verificaArray2);

let htmlString =  '<h2>Título Principal</h2>';
htmlString = htmlString.split("h2"); // Transforma a string em um array e remove o h2
htmlString = htmlString.join("h1"); // Substitui a tag h2 por h1

//console.log(htmlString);

transportes.slice(1, 4); // Retorna os itens do array que passamos

// EXERCÍCIOS

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável

console.log(comidas);
const firstValue = comidas.slice();
const firstValue2 = firstValue.shift();
console.log(firstValue2);

// Remova o último valor de comidas e coloque em uma variável

const lastValue = comidas.slice();
const lastValue2 = lastValue.pop();
console.log(lastValue2);

// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const addNewValue = comidas.slice();
const addArroz = addNewValue.push("Arroz");
const addNewValue2 = addNewValue.unshift("Peixe", "Batata");
console.log(addNewValue);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

const newArrayStudents = estudantes.slice();  // Copia o array estudantes para não alterar o principal
const newArrayStudents2 = newArrayStudents.sort(); // Ordena os itens do array em ordem alfabética
console.log(newArrayStudents2);
const studentsReverseOrder = newArrayStudents.reverse(); // Inverte a ordem dos itens do array
console.log(studentsReverseOrder);

if (newArrayStudents.includes("Joana")){
    console.log("Joana faz parte dos estudantes");
}else{
    console.log("Joana não faz parte dos estudantes");
}

if (newArrayStudents.includes("Juliana")){
    console.log("Juliana faz parte dos estudantes");
}else {
    console.log("Juliana não faz parte dos estudantes");
}

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

const newHtml = html.split("section").join("ul").split("div").join("li").replace(/\s+/g, " ");
const newHtml2 = newHtml.trim();
console.log(newHtml);

const carros2 = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

console.log(carros2);
const allCars = carros2.slice(); // Copia o array carros2 para não alterar o principal

const lastCar = allCars.pop(); // Remove o último item do array
console.log(lastCar);

