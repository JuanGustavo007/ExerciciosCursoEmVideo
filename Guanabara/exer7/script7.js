let botao = document.querySelector("button");
let corpo = document.body;

botao.addEventListener("click", function () {
  let entrada = +prompt("Digite um numero: "); //Entrada de valores

  let sessao = document.createElement("section"); //section criada

  let hra = document.createElement("hr"); //linha criada
  let novaDiv = document.createElement("p"); //elemento filho da secao
  let conteudo = document.createTextNode(
    `O numero a ser analisado é ${entrada}`
  );
  let pp = document.querySelector("p");

  //apends
  corpo.appendChild(sessao); //Inserindo a section no body
  sessao.appendChild(novaDiv); //inserindo a tag p na sessao
  novaDiv.appendChild(conteudo); //inseringo o conteudo na tag p
  novaDiv.appendChild(hra); //Inserindo apos muito tempo rsrs

  //Novas contas
  let pValorAbsoluto = document.createElement("p");
  let conteudoPabsoluto = document.createTextNode(
    "O seu valor absoluto é " + Math.abs(entrada)
  );

  //apends absoluto
  pValorAbsoluto.appendChild(conteudoPabsoluto);
  sessao.appendChild(pValorAbsoluto);

  //parte inteira
  let pValorinteiro = document.createElement("p");
  let conteudoPinteiro = document.createTextNode(
    "A sua parte inteira " + Math.trunc(entrada)
  );

  //apends parte inteira
  pValorinteiro.appendChild(conteudoPinteiro);
  sessao.appendChild(pValorinteiro);

  //Inteiro mais proximo

  let pInteiroproximo = document.createElement("p");
  let conteudoPprox = document.createTextNode(
    "O inteiro mais proximo é: " + Math.round(entrada)
  );

  //apends inteiro mais proximo

  pInteiroproximo.appendChild(conteudoPprox);
  sessao.appendChild(pInteiroproximo);

  //raiz quadrada
  let pRaiz = document.createElement("p");
  let conteudoRaiz = document.createTextNode(
    `A raiz quadrada de ${entrada} é:` + Math.sqrt(entrada)
  );

  //apends raiz quadrada

  pRaiz.appendChild(conteudoRaiz);
  sessao.appendChild(pRaiz);

  //raiz cubica

  let pRaizcubica = document.createElement("p");
  let conteudoPcubico = document.createTextNode(
    `A raiz cubica de ${entrada} é: ` + Math.cbrt(entrada)
  );

  //apends cubicos

  pRaizcubica.appendChild(conteudoPcubico);
  sessao.appendChild(pRaizcubica);

  //elevado a 2
  let elevado2 = document.createElement("p");
  let conteudoElevado = document.createTextNode(
    `O numero ${entrada} elevado ao quadrado é ` + Math.pow(entrada, 2)
  );

  //apends
  elevado2.appendChild(conteudoElevado);
  sessao.appendChild(elevado2);

  //elevado a 3
  let elevado3 = document.createElement("p");
  let conteudoElevado3 = document.createTextNode(
    `O numero ${entrada} elevado a 3 é igual a: ` + Math.pow(entrada, 3)
  );

  //apends elevado a 3

  elevado3.appendChild(conteudoElevado3);
  sessao.appendChild(elevado3);
});
