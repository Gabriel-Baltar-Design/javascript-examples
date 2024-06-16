const selectModal = document.querySelector("[data-modal='abrir']");
const closeModal = document.querySelector("[data-modal='fechar']");
const submitModal = document.querySelector("[data-submit='submit']");
const containerModal = document.querySelector("[data-modal='container']");

if(selectModal && closeModal && containerModal){

function abrirModal(event) {
    event.preventDefault();
    console.log(event);
    containerModal.classList.add("ativo");
}

function fecharModal(event) {
    event.preventDefault();
    containerModal.classList.remove("ativo");
}

function fecharModalBody(event) {

    event.preventDefault();
    if(event.target === this){
        fecharModal(event);
    }   
    
}

selectModal.addEventListener("click", abrirModal);
closeModal.addEventListener("click", fecharModal);
containerModal.addEventListener("click", fecharModalBody);

}