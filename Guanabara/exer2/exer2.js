let botao = document.querySelector("button");
let conteudo = document.body;
botao.addEventListener("click", function () {
  let promp = prompt("Digite o seu nome: ");
  let divi = document.createElement("div");
  let h11 = document.createTextNode(`Ola ${promp} seja bem vindo`);
  conteudo.appendChild(divi);
  divi.appendChild(h11);
});
