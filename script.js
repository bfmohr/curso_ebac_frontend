document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();

  const numeroA = parseFloat(document.getElementById("numeroA").value);
  const numeroB = parseFloat(document.getElementById("numeroB").value);
  const mensagem = document.getElementById("mensagem");

  if (numeroA <= numeroB) {
    mensagem.textContent = "Formulário inválido! Número B deve ser maior que número A.";
    mensagem.className = "mensagem invalido";
  } else {
    mensagem.textContent = "Formulário válido!";
    mensagem.className = "mensagem valido";
  }
});