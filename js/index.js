const img = document.querySelector("img");
const selectMenu = document.querySelectorAll("a");
const imgs = document.querySelectorAll("img");
//const linksInternos = document.querySelectorAll('a[href^="#"]');
const pageElements = document.querySelectorAll("body *");
const allText = document.querySelectorAll("body *");


function callbackMenu(event){
  //console.log(event.currentTarget);
  //console.log(event.target);
}

selectMenu.addEventListener("click", callbackMenu);

function callback(event) {
  //console.log(event);
}

//img.addEventListener("click", callback);

//console.log(img);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
  //event.preventDefault();
  //console.log(this);
}

linkExterno.addEventListener("click", handleLinkExterno);

const h1 = document.querySelector("h1");

function handleEvent(event){
  console.log(event.type, event)
}

//h1.addEventListener("click", handleEvent);
//h1.addEventListener("mouseenter", handleEvent);
//h1.addEventListener("mouseleave", handleEvent);

//window.addEventListener("scroll", handleEvent);
//window.addEventListener("resize", handleEvent);
//window.addEventListener("keydown", handleEvent);


//Função para adicionar classe no html;


function handleKeyboard(event){

  if(event.key === 'Escape') {
    document.body.classList.toggle("fullScreen");
  }
  console.log(event.key);
  
}

//window.addEventListener("keydown", handleKeyboard);

function handleImg(event){
  console.log(event.target.getAttribute("src"));
}

imgs.forEach((imgs) =>{
  imgs.addEventListener("click", handleImg);
}); 

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

function handleClick(event){

  event.preventDefault();
  linksInternos.forEach((link) =>  {
    link.classList.remove("ativo");
  });

  event.target.classList.add("ativo");

}

linksInternos.forEach((linksInternos) => {

  linksInternos.addEventListener("click", handleClick);
  console.log(linksInternos);

});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


function handleClickElement(event){
  //console.log(event.currentTarget);
};

pageElements.forEach((element) => {
  element.addEventListener("click", handleClickElement);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function handleClickElement(event){
  event.currentTarget.remove();
};

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleClickT(event) {
  if(event.key === "t" || event.key === "T"){
    document.documentElement.classList.toggle("texto-maior");
    console.log("Aumentou a fonte");
  }
}

//window.addEventListener("keydown", handleClickT);

// Transversing E Manipulação de Elementos

//const h1 = document.querySelector("h1");
const lista = document.querySelector(".animais-lista");

const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");

// Métodos para manipulação de elementos
//animais.appendChild(titulo);
//contato.insertBefore(animais, titulo);
//contato.removeChild();
//contato.replaceChild(lista, titulo);

// Criar um novo elemento
//const novoH1 = document.createElement("h1");
//novoH1.innerText = "Gabriel Baltar Pereira";

//const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add("azul");

faq.appendChild(cloneH1);

// Duplique o menu e adicione ele em copy

const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const CloneMenu = menu.cloneNode(true);

//copy.appendChild(CloneMenu);

// Selecione o primeiro DT da dl de Faq

const faqLista = document.querySelector(".faq");
const firstDt = faqLista.querySelector("dt");

// Selecione o DD referente ao primeiro DT

const secondDt = firstDt.nextElementSibling;

//console.log(secondDt);

// Substitua o conteúdo html de .faq pelo de .animais

const animalsChange = document.querySelector(".animais");

const faqChange = document.querySelector(".faq");

//faqChange.innerHTML = animalsChange.innerHTML;


// Função scroll suave para o link interno

function initScrollSuave(){

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });


    console.log();

  }

  linksInternos.forEach((link) =>{
    link.addEventListener("click", scrollToSection);
  });

};

initScrollSuave();


