let corpo = document.body; //selecionando o corpo
let botao = document.querySelector("button"); //Selecionando o botao

botao.addEventListener("click", function () {
  let nome = prompt("Digite o nome do aluno: ");
  let primeiraNota = +prompt("Digite a primeira nota: ");
  let segundaNota = +prompt("Digite a segunda nota: ");
  let media = (primeiraNota + segundaNota) / 2;

  let sessao = document.createElement("section"); //nova sessao
  let pp = document.createElement("p"); //novo p
  let conteudo = document.createTextNode(`Calcule a média de ${nome}`); // criando o conteudo de P

  corpo.appendChild(sessao); //corpo tendo a nova section como filho
  sessao.appendChild(pp); //p tendo a section como pai
  pp.appendChild(conteudo); //pp tendo como filho o seu proprio conteudo

  pp.classList.add("amarelo"); //class amarelo adicionada em p

  //Criando a parte que mostra o valor das 2 notas
  let pMedias = document.createElement("p");
  let pmediasConte = document.createTextNode(
    `A primeira nota foi ${primeiraNota} e a segunda nota foi ${segundaNota}`
  );

  sessao.appendChild(pMedias);
  pMedias.appendChild(pmediasConte);

  //criando o campo onde mostra a média final

  let pmediasFinais = document.createElement("p");
  let conteudofinais = document.createTextNode(
    `A sua média final foi ${media}`
  );

  sessao.appendChild(pmediasFinais);
  pmediasFinais.appendChild(conteudofinais);

  if ((media >= 5) & (media <= 10)) {
    let pfinal = document.createElement("p");
    let conteudofinal = document.createTextNode(
      `Voce foi aprovado ${nome}, parabens!!`
    );
    sessao.appendChild(pfinal);
    pfinal.appendChild(conteudofinal);
  } else {
    let pfinal = document.createElement("p");
    let conteudofinal = document.createTextNode(
      `Voce foi Reprovado, procure estudar mais ${nome}!!`
    );
    sessao.appendChild(pfinal);
    pfinal.appendChild(conteudofinal);
  }
});
