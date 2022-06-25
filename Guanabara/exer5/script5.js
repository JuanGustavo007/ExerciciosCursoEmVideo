let botao = document.querySelector("button");
let corpo = document.body;
botao.addEventListener("click", function () {
  let nome = prompt("Digite aqui o seu nome: ");
  let primeiraNota = +prompt("Digite aqui a primeira nota: ");
  let segundaNota = +prompt("Digite a segunda nota: ");
  let media = primeiraNota + segundaNota;
  let novaDiv = document.createElement("section"); //criando a secao ao clicar no botao
  let paragrafo = document.createElement("p"); //Criando a tag p ao clicar no botao
  let conteudo = document.createTextNode(`Calculando a média final de ${nome}`); //f string e conteudo da tag p com meu nome
  let paragrafo2 = document.createElement("p");
  let conteudo2 = document.createTextNode(
    `As notas obtidas foram ${primeiraNota} e ${segundaNota}`
  );

  let paragrafo3 = document.createElement("p");
  let conteudo3 = document.createTextNode(
    `A média final do aluno ${nome} foi de ${media}`
  );
  paragrafo.appendChild(conteudo); //Colocando contteudo na tag p
  paragrafo2.appendChild(conteudo2); //Colocando o conteudo na segunda tag p
  paragrafo3.appendChild(conteudo3); //Colocando conteudo na terceira tag p
  novaDiv.appendChild(paragrafo); //nova div vai ter como filho a tag p
  novaDiv.appendChild(paragrafo2); //Nova div tem como filho a segunda tag p
  novaDiv.appendChild(paragrafo3); //nova div tem como filho a terceira tag p
  corpo.appendChild(novaDiv); //adicionando a nova secao no body
});
