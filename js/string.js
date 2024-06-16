/*const comida = "Pizza";
const agua = new String("Agua");

//console.log(comida.length);

const frase = "A melhor linguagem é: ";
const linguagem = "JavaScript";

//console.log(`Frase completa é: ${frase} a posição do Array e: ${frase.charAt(2)}`);


const preco = "R$ 99,00";

const frase2 = "Gabriel é muito alto";

//console.log(frase2.repeat(5));
let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";

//console.log(listaItens);

listaItens = listaItens.replace(/[ ]+/g,", ");

//console.log(listaItens);

const arrayLista = listaItens.split(", ");

//console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");

console.log(htmlText);
console.log(htmlArray);

const frutasArray = ["Banana", "Melancia", "Laranja"];
const frutasMaiuscula = frutasArray[1].toUpperCase();
//console.log(frutasArray.join(", "));

console.log(frutasMaiuscula); */


// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];
  
  //Início do exercício

  let taxaTotal = 0;

  transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace("R$ ", "");
    //console.log(numeroLimpo);
    if(item.descricao.slice(0, 4) === "Taxa"){

        taxaTotal = taxaTotal + numeroLimpo;
        
    }

  });

  console.log(taxaTotal);

  

  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

  const arrayTransportes = transportes.split(";");
  console.log(arrayTransportes);
  


  // Substitua todos os span's por a's
  let html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

    html = html.split("span").join("a");
    console.log(html);
  
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';

  console.log(frase[frase.length - 1]);
  
  // Retorne o total de taxas
  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  
  let taxasTotal2 = 0;

  transacoes2.forEach((item, index) => {
    item = item.toLowerCase();
    item = item.trim();
    item = item.slice(0, 4);

    if(item === "taxa"){
        taxasTotal2++;
    }

    console.log(item);
  });
  
  console.log(taxasTotal2);