 document.getElementById('person-historia').addEventListener('input', function() {
    const minLength = 1000;
    const currentLength = this.value.length;

    if (currentLength < minLength) {
      this.setCustomValidity('A história deve ter no mínimo 15 Linhas !');
    } else {
      this.setCustomValidity('');
    }
  });

//-----------------------------------------------------------------------------------


 document.addEventListener("DOMContentLoaded", function () {
  const elementoTempoRestante = document.getElementById("cronometro");
  let temporizador;

  function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
  }

 
function exibirModalRecomecar() {
  const modalRecomecar = document.getElementById("modalRecomecar");
  modalRecomecar.style.display = "block";
}


window.recomecarCronometro = function () {
  const modalRecomecar = document.getElementById("modalRecomecar");
  modalRecomecar.style.display = "none";
  clearInterval(temporizador);

 
  const formulario = document.getElementById("formAL");
  if (formulario) {
    formulario.reset();
  }

  iniciarCronometro();
};
  
  function exibirModalInicial() {
    const modalInicial = document.getElementById("modalInicial");
     const formAL = document.getElementById("formAL");
    modalInicial.style.display = "block";
    formAL.style.display =  "none";
  }

  
  function fecharModalInicial() {
    const modalInicial = document.getElementById("modalInicial");
    const formAL = document.getElementById("formAL");
    modalInicial.style.display = "none";
    formAL.style.display =  "block";
    iniciarCronometro();
  }

 
  function atualizarTempoRestante(tempoRestante) {
    elementoTempoRestante.textContent = `Tempo restante: ${formatarTempo(tempoRestante)}`;
  }

  
  function iniciarCronometro() {
    const tempoLimite = 60 * 60; //o primeiro valor define o tempo com base nos 60 sec
    let tempoRestante = tempoLimite;

    temporizador = setInterval(function () {
      tempoRestante -= 1;
      atualizarTempoRestante(tempoRestante);

      if (tempoRestante <= 0) {
        clearInterval(temporizador);
        exibirModalRecomecar();
      }
    }, 1000);
  }

  
  exibirModalInicial();


  document.getElementById("iniciarBotao").addEventListener("click", fecharModalInicial);

  
  document.getElementById("recomecarBotao").addEventListener("click", window.recomecarCronometro);
});

  
  
 