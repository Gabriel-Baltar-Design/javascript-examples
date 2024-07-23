console.log(document.forms[0].elements);

const contato = document.querySelector('#contato');

function handleKeyUp(event) {

    /*const target = event.target;

    if(!target.checkValidity()) {
        target.classList.add('invalido');
        target.setCustomValidity("Este campo é obrigatório!")
        target.nextElementSibling.innerText = target.validationMessage;
    }

    console.log(event.target.checkValidity());
    console.log(event.target.value);*/

    if(event.target.checked) {

        console.log(event.target.value);
        
    }
    console.log(event.target.checked);

    document.body.style.backgroundColor = event.target.value;

    console.log(event.target.value);
    

}

contato.addEventListener('change', handleKeyUp); 

