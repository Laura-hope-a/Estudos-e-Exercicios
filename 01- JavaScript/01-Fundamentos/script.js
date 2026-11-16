//const nome = "Laura Hope";
//console.log (nome)
//const idade = 20;
//console.log (idade)
//const profissão = "Designer"
//console.log (profissão)

//Boleanos//
const estudajavascript = false;

if (estudajavascript) {
    console.log ("estudante de javascript");
}
else{ 
    console.log ("não estuda javascript");
}

// Operadores//

const numero1 = 10;
const numero2 = 5;



console.log (numero1+ numero2)
console.log (numero1-numero2)
console.log (numero1*numero2)
console.log (numero1/numero2)
console.log (numero1>numero2)
console.log (numero1==numero2)


//Comparação//

console.log ( 5 == "5");
console.log (5 === "5")
console.log ( "laura" === "laura");
console.log (100 === "100")

//TypeOf//

//let nome = "laura"
//console.log (typeof nome)

//let idade = 20
//console.log(typeof idade);


let estudante = true;
console.log(typeof estudante)


// If e Else

//const idade = 18;

//if (idade >= 18){
    //console.log("Pode entrar")


//else { 
    // console.log ("Não pode entrar")

//const idade = 20;

//if (idade <12) {
//    console.log( "Criança")

//else if (idade <= 17) {
//    console.log("Adolescente")


//else {
  //  console.log("Adulto")


//switch

const dia = 1

switch (dia) {
case 1:
    console.log("Hoje é Domingo, dia de feira")
    break;

case 2:
    console.log("Segunda-feira")
    break;

case 3:
    console.log("Terça-feira")
    break;

case 4:
    console.log("Quarta-feira")
    break;

case 5:
    console.log("Quinta-feira")
    break;

case 6:
    console.log("Sexta-feira")
    break;


case 7:
    console.log("Sábado")
    break;

}

//function

//function saudacao (){
    console.log("Olá Laura! Tudo bem?")
//}

// Parametros e Argumentos()

function saudacao (nome) {
    console.log("Olá," +nome+ "! Tudo bem?")
}
saudacao("Thiago")

//return

function triplicar (numero){
return numero * 3;
}
triplicar(10);
console.log(triplicar(10))

//Escopo

//function mostrarnome(){
    //const nome="Laura";


//mostrarnome()
//console.log(nome);

//string

//const nome="laura";
//console.log(nome.toUpperCase());

const cidade = "SÃO PAULO"
console.log(cidade.toLowerCase())

const palavra = "JavaScript"
console.log(palavra.length)

const frase ="Eu estou estudando JavaScript"
console.log(frase.includes("pyton"))

const nome = "   Lorena   " 
console.log(nome.trim())

const texto = "    Javascript é muito legal   "
console.log (texto.toUpperCase())
console.log (texto.includes("Javascript"))
console.log (texto.trim())

const verso= "alguma coisa, outra coisa javascript"
console.log(verso.includes("JAVASCRIPT"))

//arrays

//const filmes = ["Interestelar", "Barbie", "Creed","Monstros SA"]
//console.log(filmes [filmes.length -1]);

//console.log(filmes [1] = "Toy Story")
//filmes.pop("Os Vingadores")
//filmes.push("O Rei Leão")
//console.log(filmes)

//const fruta =["Maça","Banana", "Melancia"]
//fruta.push("uva")
//fruta.shift("Maça")
//fruta.unshift("Laranja")
//fruta[1] ="Morango"
//console.log(fruta)
//console.log(fruta.length)

//Objetos

const filme = {
    titulo: "Comer rezar e amar",
    ano: 2010,
    diretor: "Ryan Murphy"
}
filme.ano =2011
filme.genêro="Romance"
delete filme.genêro
console.log(filme)
console.log(filme.ano)
console.log(filme.titulo)





const pessoa ={
    nome: "Laura Hope",
    idade: 20,
    cidade: "São Paulo"
    }
    pessoa.idade =21
    pessoa.profissão ="Desenvolvedora"
    delete pessoa.cidade
    console.log(pessoa)

    //Loop

//for (let i = 30; i >=3; i = i -3){
  //  console.log (i)
//}

//for (let i= 1; i<=20; i=i+1){
//if ( i > 10 && i % 2 === 0){
//console.log(i)
//}
//}

//for( let i=1; i<=20; i=i+1){
//if(i >10 && i < 18 ){
  //  console.log(i)
//}
//}

//for (let i=1; i<=30; i=i+1){
//if(i<10 || i>25){
//    console.log(i)
//}
//}

for(let i=1; i<=30; i=i+1){
if(i % 2 === 0 && i>10 && i<25){
    console.log(i)
}
}

const fruta = ["maça", "banana", "uva","morango","laranja"]
for(let i=0; i< fruta.length; i=i+1){
console.log (fruta[i])
}


const nomes=["Laura","Ana","Lorena","Thiago","Renalvo"]
for (let i=0; i< nomes.length; i=i+1){
    console.log(nomes[i])
}
const idades = [15,18,25,29,40]
for (let i=0; i< idades.length; i=i+1){
if (idades[i] >= 18){
console.log (idades[i])

}
}