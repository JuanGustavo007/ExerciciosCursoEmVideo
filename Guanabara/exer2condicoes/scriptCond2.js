let corpo = document.body;
let botao = document.querySelector("button");

botao.addEventListener("click", function () {
  let entrada = +prompt("Digite um numero: ");
  if (entrada % 2 === 0) {
    let sessao = document.createElement("section");
    let novoP = document.createElement("p");
    let conteudo = document.createTextNode(`O numero ${entrada} é Par!!`);
    corpo.appendChild(sessao);
    sessao.appendChild(novoP);
    novoP.appendChild(conteudo);
  } else {
    let sessao = document.createElement("section");
    let novoP = document.createElement("p");
    let conteudo = document.createTextNode(`O numero ${entrada} é Impar!!`);

    corpo.appendChild(sessao);
    sessao.appendChild(novoP);
    novoP.appendChild(conteudo);
  }
});
