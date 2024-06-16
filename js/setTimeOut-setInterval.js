/*const btn = document.querySelector('[data-button="button"]');


btn.addEventListener('click', handleClick);

function handleClick() {
    setTimeout(() => {
        this.classList.toggle('active');
        console.log('clicou no botão');
    }, 2000);
}

function espera() {

    console.log('Executou await');

}

setTimeout(() => {
    
        console.log('Executou setTimeout');

}, 2000);

/*for (let i = 0; i < 20; i++) {
    
    setTimeout(() => {
        console.log(i);
    }, 1000 * i);
}*/

function loop(texto) {
    console.log(texto);
}

//setInterval(loop, 2000, 'Passou 2 segundos');



let i = 0;

const interval = setInterval(() => {
    console.log(i++);
    if (i > 20) {
        console.log('Parou');
        clearInterval(interval);
    }
}, 500, "Passou 1 segundo");

// Mude a cor da tela para azul e depois para vermelho a cada 2s.



function changeColor() {
    document.body.classList.toggle('active');
}

//setInterval(changeColor, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
