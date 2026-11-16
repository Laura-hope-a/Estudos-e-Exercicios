const numero = document.getElementById("numero");
const diminuir = document.getElementById("diminuir");
const aumentar = document.getElementById("aumentar");
const zerar = document.getElementById("zerar");
let contador = 0
aumentar.addEventListener("click", function(){
contador++
numero.textContent=contador;
})
zerar.addEventListener("click", function(){
numero.textContent= contador=0;
})
diminuir.addEventListener("click", function(){
numero.textContent=--contador;

})
