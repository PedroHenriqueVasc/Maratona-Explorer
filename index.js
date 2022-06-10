const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

const inputPergunta = document.querySelector("#inputPergunta");
const pergunta = document.querySelector("h3");
const respostaSpan = document.querySelector("span");
const divResposta = document.querySelector("#divResposta");
const botao = document.querySelector("button");

function revelarResposta(){
  if(inputPergunta.value === ""){
    window.alert("Por favor faça uma pergunta.");
    return
  }
  const qtdRespostas = respostas.length;
  const valorAleatorio = Math.floor(Math.random() * qtdRespostas);
  pergunta.innerHTML = inputPergunta.value;
  respostaSpan.innerHTML = respostas[valorAleatorio];
  botao.setAttribute("disabled", true);
  divResposta.style.opacity = "1.0"
  // divResposta.innerHTML = "";

  setTimeout(function(){
    botao.removeAttribute("disabled");
    divResposta.style.opacity = "0.0";
    inputPergunta.value = "";
    }, 3000);
}
