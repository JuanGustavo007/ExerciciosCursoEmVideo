let botao = document.querySelector("button");

botao.addEventListener("click", function () {
  let alerta = prompt("Digite um numero");
  let dobro = alerta * 2;
  let metade = alerta / 2;

  let corpo = document.body;
  let divNova = document.createElement("div");
  let conteudo = document.createTextNode(
    `O dobro de ${alerta} é ${dobro} e a metade de ${alerta} é ${metade}`
  );
  divNova.appendChild(conteudo);
  corpo.appendChild(divNova);
});
