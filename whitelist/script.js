 document.getElementById('person-historia').addEventListener('input', function() {
    const minLength = 1000;
    const currentLength = this.value.length;

    if (currentLength < minLength) {
      this.setCustomValidity('A história deve ter no mínimo 15 Linhas !');
    } else {
      this.setCustomValidity('');
    }
  });

//----------------------------------------


 document.addEventListener("DOMContentLoaded", function () {
  const elementoTempoRestante = document.getElementById("cronometro");
  let temporizador;

  function formatarTempo(segundos) {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    return `${minutos}:${segundosRestantes < 10 ? '0' : ''}${segundosRestantes}`;
  }

 // Função para exibir o modal de recomeçar
function exibirModalRecomecar() {
  const modalRecomecar = document.getElementById("modalRecomecar");
  modalRecomecar.style.display = "block";
}

// Função para reiniciar o cronômetro e fechar o modal de recomeçar
window.recomecarCronometro = function () {
  const modalRecomecar = document.getElementById("modalRecomecar");
  modalRecomecar.style.display = "none";
  clearInterval(temporizador);

  // Adiciona o código para resetar o formulário
  const formulario = document.getElementById("formAL");
  if (formulario) {
    formulario.reset();
  }

  iniciarCronometro();
};
  // Função para exibir o modal inicial
  function exibirModalInicial() {
    const modalInicial = document.getElementById("modalInicial");
    modalInicial.style.display = "block";
  }

  // Função para fechar o modal inicial e iniciar o cronômetro
  function fecharModalInicial() {
    const modalInicial = document.getElementById("modalInicial");
    modalInicial.style.display = "none";
    iniciarCronometro();
  }

  // Função para atualizar o tempo restante
  function atualizarTempoRestante(tempoRestante) {
    elementoTempoRestante.textContent = `Tempo restante: ${formatarTempo(tempoRestante)}`;
  }

  // Função para iniciar o cronômetro
  function iniciarCronometro() {
    const tempoLimite = 60 * 60; // 6 segundos (0.10 minutos * 60 segundos por minuto)
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

  // Adiciona um evento para exibir o modal inicial quando o documento for carregado
  exibirModalInicial();

  // Adiciona um evento ao botão "Iniciar" dentro do modal inicial
  document.getElementById("iniciarBotao").addEventListener("click", fecharModalInicial);

  // Adiciona um evento ao botão "Recomeçar" dentro do modal de recomeçar
  document.getElementById("recomecarBotao").addEventListener("click", window.recomecarCronometro);
});

  
  
 