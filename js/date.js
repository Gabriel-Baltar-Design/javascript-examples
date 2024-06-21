export default function initFuncionamento() {

    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
    const horarioSemena = funcionamento.dataset.horario.split(',').map(Number);
    

    console.log('Dias Semana: ', diasSemana);
    console.log('Horario de Funcionamento: ', horarioSemena);

    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horaAgora = dataAgora.getHours();

    const teste = [1,2,3,4,5].indexOf(5);

    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

    const horarioAberto = (horaAgora >= horarioSemena[0] && horaAgora < horarioSemena[1]);

    console.log('Semana Aberto: ', semanaAberto);
    console.log('Horario Aberto: ', horarioAberto);

   if(semanaAberto && horarioAberto) {
        console.log("Aberto");
        funcionamento.classList.add('aberto');
   }else {
    console.log("Fechado!");
    funcionamento.classList.add('fechado');
   }
    
    console.log(semanaAberto);

    

}