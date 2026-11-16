//const titulo = document.getElementById("titulo")
//titulo.textContent="Estudando JavaScript"
//const paragrafo = document.getElementById("paragrafo");
//paragrafo.textContent = "Estou aprendendo manipular o DOM";

//const mensagem = document.querySelectorAll(".mensagem");
//    for(let i=0; i<mensagem.length; i++){
 //   mensagem[i].textContent="Estou evoluindo no JavaScript"


//const aviso= document.getElementById("aviso")
//aviso.style.color ="blue";
//aviso.style.fontSize="24px";

//const destaque= document.querySelectorAll(".destaque")
//for (let i= 0; i<destaque.length; i++){
//destaque[i].style.color="red";
//destaque[i].style.fontSize="20px";

//}

//AddEventListener

//const botao = document.getElementById("botao")
//const mensagem = document.getElementById("mensagem")

//botao.addEventListener("click", function(){
//mensagem.textContent="Você clicou no botão!";    
//mensagem.style.color="blue";
//mensagem.style.fontSize="30px"
//})


///const botao = document.getElementById("botao")
//const titulo = document.getElementById("titulo")
//botao.addEventListener("click",function(){
//titulo.textContent="Estou aprendendo DOM!";
//titulo.style.color="red";
//});

//const titulo= document.getElementById("titulo")
//const estudo= document.getElementById("estudo")
//const botao= document.getElementById("botao")
//botao.addEventListener("click",function(){
//titulo.textContent="Vamos estudar Javascript";
//e//studo.textContent="Estou praticando eventos no DOM";
//estudo.style.fontSize="24px";


//})

//const aviso= document.getElementById("aviso");
//const botao= document.getElementById("botao");
//botao.addEventListener("click", function(){
/// aviso.textContent="Tudo certo!";
 //aviso.style.color="green";   
//aviso.style.fontSize="28px";
//})

//const titulo = document.getElementById("titulo");
//const mensagem = document.getElementById("mensagem");
//const botao = document.getElementById("botao");
//botao.addEventListener("click", function(){
//mensagem.textContent ="Vamos colocar as tarefas em dia!";
//mensagem.style.color="green";
//botao.textContent="Tarefas iniciadas!";
//})

//const novatarefa = document.createElement("li");
//novatarefa.textContent="Estudar JavaScript";
//const lista = document.getElementById("lista");
//lista.appendChild(novatarefa);








//const novoitem= document.createElement("li");
//const listafilmes = document.getElementById("listafilmes");
//const botao = document.getElementById("botao");
//botao.addEventListener("click", function(){
//novoitem.textContent="Senhor dos Aneis";
//listafilmes.appendChild(novoitem)
//})









//const minhastarefas =document.getElementById("minhastarefas");
//const botao = document.getElementById("botao");
//botao.addEventListener("click", function(){
//const novatarefa = document.createElement("li");
//novatarefa.textContent="Estudar JavaScript";
//minhastarefas.appendChild(novatarefa);
//})



//const minhastarefas = document.getElementById("minhastarefas");
//const campodetarefa = document.getElementById("campodetarefa");
//const botao = document.getElementById("botao");
//botao.addEventListener("click", function(){
//if(campodetarefa.value.trim() !==""){
  //  const novatarefa = document.createElement("li");
//novatarefa.textContent=(campodetarefa.value);
//minhastarefas.appendChild(novatarefa);
//}})

//const campodetarefa = document.getElementById("campodetarefa");
//const minhastarefas = document.getElementById("minhastarefas");
//const botao = document.getElementById("botao");
//botao.addEventListener("click", function(){
//if (campodetarefa.value.trim() !=="" ){
//const novatarefa = document.createElement("li");
//novatarefa.textContent=(campodetarefa.value);
//minhastarefas.appendChild(novatarefa);
//campodetarefa.value="";
//}})

//const aviso = document.getElementById("aviso")
//const botao = document.getElementById("botao")
//botao.addEventListener("click", function(){
//a/viso.classList="aviso"
//})





//const mensagem = document.getElementById("mensagem")
//const botao = document.getElementById("botao")
//botao.addEventListener("click", function() {
//mensagem.innerHTML ="Olá! Seja bem-vinda ao estudo de JavaScript.<br><strong>Continue praticando! </strong>"/
//})

//const formulario = document.getElementById("formulario")
//const nome = document.getElementById("nome")
//const mensagem = document.getElementById("mensagem")
//formulario.addEventListener("submit",function(evento){
//evento.preventDefault()
//if(nome.value. trim() !==""){
//mensagem.textContent= `Olá,${nome.value}, Seja bem-vinda aos estudos`;
//}})



//const formulario = document.getElementById("formulario")
//const linguagem = document.getElementById("linguagem")
//const mensagem = document.getElementById("mensagem")
//formulario.addEventListener("submit",function(event){
//event.preventDefault();
//if(linguagem.value.trim() !==""){
  //  mensagem.textContent=`Você está estudando ${linguagem.value}. Continue assim! `
//}})


//const texto= document.getElementById("texto")
//const linguagem= document.getElementById("linguagem")
//const previa= document.getElementById("previa")
//linguagem.addEventListener("input", function(){
//previa.textContent=linguagem.value;   
//if (linguagem.value.trim() !==""){
//}
//else{
//previa.textContent="Sua mensagem aparecerá aqui.";
//}
//})










const mensagem = document.getElementById("mensagem")
const texto = document.getElementById("texto")
const contador = document.getElementById("contador")
texto.addEventListener("input", function(){
contador.textContent="Caracteres:"+ texto.value.length;
})

