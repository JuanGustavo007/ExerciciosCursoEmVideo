let botao1 = document.querySelector(".botao1");
let botao2 = document.querySelector(".botao2");
let corpo = document.body;
let contador = 0;
botao1.addEventListener("click", function () {
  contador++;
  let cliques = contador;
  let sessao = document.createElement("section");
  let novoP = document.createElement("p");
  sessao.classList.add(".botaozin");
  let conteudo = document.createTextNode(
    `O contador esta com ${cliques} cliques`
  );

  corpo.appendChild(sessao);
  sessao.appendChild(novoP);
  novoP.appendChild(conteudo);
  //apends
});

botao2.addEventListener("click", function () {
  document.body.removeChild(document.querySelector("section"));
});
