let botao = document.querySelector("button");
let corpo = document.body;

botao.addEventListener("click", function () {
  let numero1 = +prompt("Digite o primeiro numero: "); //Entrada do primeiro valor
  let numero2 = +prompt("Digite o segundo numero: "); //Entrada do segundo valor
  let soma = numero1 + numero2; //Soma das entradas

  let novaDiv = document.createElement("div");
  let conteudo = document.createTextNode(
    `a Soma de ${numero1} e ${numero2} é igual a ${soma}`
  );
  novaDiv.appendChild(conteudo);

  corpo.appendChild(novaDiv);
});
