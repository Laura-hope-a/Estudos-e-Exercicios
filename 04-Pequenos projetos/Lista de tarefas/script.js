const tarefa= document.getElementById("tarefa");
const adicionar= document.getElementById("adicionar");
const lista= document.getElementById("lista");

function adicionartarefa(){
if(tarefa.value.trim()!==""){
const novatarefa=document.createElement("li");
novatarefa.addEventListener("click", function(){
novatarefa.classList.toggle("concluida");
})
novatarefa.textContent=tarefa.value;
tarefa.value="";
lista.appendChild(novatarefa);
const button=document.createElement("button")
button.textContent="Excluir"
button.classList.add("excluir");
novatarefa.appendChild(button);
button.addEventListener("click",(event)=>{
event.stopPropagation();
novatarefa.remove();
})}}

adicionar.addEventListener("click", function(){
adicionartarefa()
})
tarefa.addEventListener("keydown", function(event){
if(event.key==="Enter"){
adicionartarefa();
}})
