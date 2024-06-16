function initTavNav() {

    // Seleciona os itens HTML e adiciona dentro uma varável
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    tabContent[0].classList.add("ativo");

    // Função que executa em lool (ForEach) removendo a class ativo de todos os itens e abaixo adicionando a class ativo no item clicado (Pelo index "Posição no array");
    // if para verificar se existe os itens HTML, se sim, executa a função
    if(tabMenu.length && tabContent.length) {
        
        function activeTab(index) {

            tabContent.forEach((section) => {
                section.classList.remove("ativo");
                
            });

            const direcaoDaAnimacao = tabContent[index].dataset.anime;

            tabContent[index].classList.add("ativo", direcaoDaAnimacao);
        
        }
        
        // Função que executa em lool (ForEach) adicionando um evento de click em cada item HTML e retornando seu index (posição do array);
        tabMenu.forEach((itemMenu, index) => {
        
            itemMenu.addEventListener("click", () => {
                activeTab(index);
                //console.log(index);
            });
        
        });
    };

};

initTavNav();


function initAccordion() {

    const accordionItem = document.querySelectorAll('[data-anime="accordion"] dt');
    const firstAccordion = document.querySelectorAll('[data-anime="accordion"] dd');

    firstAccordion[0].classList.add("ativo");

    if(accordionItem.length && firstAccordion.length) {

        function activeAccordion() {

            this.classList.toggle("ativo");
            this.nextElementSibling.classList.toggle("ativo");
        }

        accordionItem.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        });

    };

};

initAccordion();

// Função scroll suave para o link interno

function initScrollSuave(){

    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  
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
  


// Adicionando animação ao scroll suave 

function initAnimacaoScroll(){

    const sections = document.querySelectorAll('[data-anime="scroll"]');
    const windowMetade = window.innerHeight * 0.6;
  
    if(sections.length){
  
    function animaScroll(){
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if(sectionTop < 0){
  
          section.classList.add("ativo");
  
        }
      });
    }
  
    }
  
    animaScroll();
  
    window.addEventListener("scroll", animaScroll);
  
  };
  
  initAnimacaoScroll();
  
