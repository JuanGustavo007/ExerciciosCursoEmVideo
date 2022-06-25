let corpo = document.body;
let botao = document.querySelector("button");

botao.addEventListener("click", function () {
  let data = new Date();
  let dia = data.getDate(); //data
  let mes = data.getMonth() + 1; //mes
  let ano = data.getFullYear(); //ano
  let semana = data.getUTCDay();
  if (semana === 6) {
    semana = "Sabado";
  }
  let hora = data.getHours(); //horas
  let minutos = data.getMinutes(); //minutos
  let seconds = data.getSeconds(); //segundos
  console.log(data, dia, mes, ano, hora, minutos, seconds, semana);

  //criando os campos

  //dia e sessao dentro da section
  let sessao = document.createElement("section");
  let novoP = document.createElement("p");

  let conteudoDia = document.createTextNode(`Hoje é dia: ${dia}`);

  corpo.appendChild(sessao);
  sessao.appendChild(novoP);
  novoP.appendChild(conteudoDia);

  //mes
  let pMes = document.createElement("p");
  let conteudoMes = document.createTextNode(`Mes: ${mes}`);

  sessao.appendChild(pMes);
  pMes.appendChild(conteudoMes);

  //ano

  let pAno = document.createElement("p");
  let conteudoAno = document.createTextNode(`Ano: ${ano}`);

  sessao.appendChild(pAno);
  pAno.appendChild(conteudoAno);

  //Dia da semana
  let pSemana = document.createElement("p");
  let conteudoSemana = document.createTextNode(`Dia da semana: ${semana}`);

  sessao.appendChild(pSemana);
  pSemana.appendChild(conteudoSemana);

  //hora

  let phoras = document.createElement("p");
  let conteudoHoras = document.createTextNode(`Horas: ${hora}`);

  sessao.appendChild(phoras);
  phoras.appendChild(conteudoHoras);

  //minutos
  let pMinutos = document.createElement("p");
  let conteudoMinutos = document.createTextNode(`Minutos: ${minutos}`);

  sessao.appendChild(pMinutos);
  pMinutos.appendChild(conteudoMinutos);

  //segundos

  let pSegundos = document.createElement("p");
  let conteudoPsegundos = document.createTextNode(`Segundos: ${seconds}`);

  sessao.appendChild(pSegundos);
  pSegundos.appendChild(conteudoPsegundos);
});
