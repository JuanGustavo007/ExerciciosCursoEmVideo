let corpo = document.body;
let botao = document.querySelector("button");

botao.addEventListener("click", function () {
  let entrada = +prompt("Digite o ano que voce nasceu: ");
  let diferenca = 2022 - entrada;
  let sessao = document.createElement("section");
  let novoP = document.createElement("p");

  let conteudo = document.createTextNode(
    `Quem nasceu em ${entrada} vai completar ${diferenca}anos em 2022`
  );

  corpo.appendChild(sessao);
  sessao.appendChild(novoP);
  novoP.appendChild(conteudo);
});
