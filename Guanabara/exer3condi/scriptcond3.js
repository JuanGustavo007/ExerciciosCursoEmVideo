let corpo = document.body;
let botao = document.querySelector("button");

botao.addEventListener("click", function () {
  let entrada = +prompt("Digite o primeiro valor: ");
  let entrada2 = +prompt("Digite o segundo valor: ");

  if (entrada > entrada2) {
    let sessao = document.createElement("section");
    let pps = document.createElement("p");
    let conteudo = document.createTextNode(
      `O primeiro valor digitado ${entrada} é maior que ${entrada2} !!`
    );

    //vinculos

    corpo.appendChild(sessao);
    sessao.appendChild(pps);
    pps.appendChild(conteudo);
  } else if (entrada2 > entrada) {
    let sessao = document.createElement("section");
    let pps = document.createElement("p");
    let conteudo = document.createTextNode(
      `O Segundo valor digitado ${entrada2} é maior que ${entrada} !!`
    );

    //vinculos

    corpo.appendChild(sessao);
    sessao.appendChild(pps);
    pps.appendChild(conteudo);
  } else if (entrada === entrada2) {
    let sessao = document.createElement("section");
    let pps = document.createElement("p");
    let conteudo = document.createTextNode(
      `Ambos os valores de ${entrada} e ${entrada2} sao iguais`
    );

    //vinculos

    corpo.appendChild(sessao);
    sessao.appendChild(pps);
    pps.appendChild(conteudo);
  }
});
