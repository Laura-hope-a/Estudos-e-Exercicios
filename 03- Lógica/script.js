//Função idade

function verificarIdade(idade){ 
if(idade>=18){
return "Maior de idade"
}
else{
return "Menor de idade"
}
}
console.log(verificarIdade(20))

//Filtrar produtos

//const produtos=
//[
//{ nome:"Camiseta", preco:50},
//{ nome: "Tênis", preco: 250 },
//{ nome: "Boné", preco: 80 },
//{ nome: "Mochila", preco: 150 },
//{ nome: "Meias", preco: 25 }
//]
//
//const produtoscaros= produtos.filter(produtos>=100)

//Calculadora de Desconto
function verificarAprovação(aprovação){
if(aprovação>=7){
    return"Aprovado";
}
else{
return"Reprovado";
}
}
console.log(verificarAprovação(5))

//Verificar Temperatura
//function verificarTemperatura(temperatura){
//if(temperatura>=30){
//return "Está quente"
//}
//else{
//return"Temperatura agradável"
//}
//}
//console.log(verificarTemperatura(30))//
//console.log(verificarTemperatura(20)//)

//Verificar numero
////function verificarNumero(numero){
////if(numero>0){
////return"Positivo";
////}
//////return "Negativo";
//}
////else{
////return"Zero"
////}

////}
//////console.log(verificarNumero(8))
//////console.log(verificarNumero(0))
//////console.log(verificarNumero(-1))


//verificar velocidade
function verificarVelocidade(velocidade){
if(velocidade>80){
    return"Acima da velocidade"
}
else if(velocidade >=40 && velocidade <= 80){
return"Velocidade permitida"
}
else{
return"Velocidade muito baixa"
}
}
//console.log(verificarVelocidade(40))
//console.log(verificarVelocidade(80))
//console.log(verificarVelocidade(90))














function calcularFrete(frete){
if(frete >=200){
    return"Frete Grátis"
}
else if(frete >=100 && frete <200){
return"Frete de R$10,00"
}
else{
return"Frete de R$20,00"
}
}
//console.log(calcularFrete(50))
//console.log(calcularFrete(150))
//console.log(calcularFrete(250))
//console.log(calcularFrete(100))
//console.log(calcularFrete(200))









function classificarNota(nota){
if(nota>=9){
return"Excelente"
}
if (nota>=7 && nota<9){
return"Aprovado"

}
else if(nota>=5 && nota<7){
return"Recuperação"
}
else{
return"Reprovado"
}

}
console.log(classificarNota(4))
console.log(classificarNota(5))
console.log(classificarNota(7))
console.log(classificarNota(9))


function calcularIngresso(ingresso){
if(ingresso <5){
return"Entrada gratuita"
}
if(ingresso >=5 && ingresso<=17){
return"Meia entrada"
}
else if (ingresso >=18 && ingresso <=59){
return "Ingresso Inteiro"
}
else{
return"Meia-entrada para idosos"
}
}
//console.log(calcularIngresso(3))
//console.log(calcularIngresso(5))
//console.log(calcularIngresso(18))
//console.log(calcularIngresso(12))
//console.log(calcularIngresso(30))
//console.log(calcularIngresso(65))

function verificarSaque(saque){
if(saque <=0){
return"Valor inválido"
}
else if(saque> 1000){
return"Limite excecido"
}
else{
return"Saque autorizado"
}
}
console.log(verificarSaque(0))
console.log(verificarSaque(150))
console.log(verificarSaque(1000))
console.log(verificarSaque(1500))

