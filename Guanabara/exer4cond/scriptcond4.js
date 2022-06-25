let corpo = document.body;
let botao = document.querySelector("button");

botao.addEventListener("click", function () {
  let sessao = document.createElement("section");
  let horas = new Date();
  let novoP = document.createElement("p");
  let conteudo = document.createTextNode(
    `O que eu recebi do sistema foi ${horas}`
  );

  corpo.appendChild(sessao);
  sessao.appendChild(novoP);
  novoP.appendChild(conteudo);
});
