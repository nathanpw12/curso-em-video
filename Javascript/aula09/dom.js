///////////////// O que é DOM? ///////////////

// Document Object Model é um conjunto de objetos que esta presente dentro de navegadores quando usavamos javascript

///////////////// Árvore DOM ///////////////

// essa arvóre começa na raiz window, ou seja toda a página vem do objeto window

/* Explicação visual: https://prnt.sc/8eELGQEIgHwl */

// e dentro de window temos alguns exemplos como:

// location
// history
// document

// e todos esses tambem tem outros objetos dentro dele, como por exemplo:

//dentro de document temos:

//html

// e dentro de html temos:

// head 
// body 

// e dentro de head temos:

//meta 
//title

// e dentro de body temos

//h1 
//p
//div

// e dentro de p temos:

//strong

/* ou seja, toda a estrutura do html é constuida por uma arvore de objetos, como a página toda com seus outros objetos como location e history */

/* esses são só alguns exemplos de objetos presentes na arvore e não os unicos */

///////////////// Parentesco no DOM ///////////////

// se o objeto é acima de outro, ele é parent (pai)

// se objeto está abaixo de outro, ele é child (filho)

// Por exemplo seguindo a arvoré acima, document é parent de html e child de window, e html é parent de head e child de document

///////////////// Seletores do DOM ///////////////


// 1° getElementsByTagName()[] pega elementos pela tag 

var x = document.getElementsByTagName('tag')[1] // [posição]

x.style.color = 'white';
alert(x.innerText) // pega somente o texto
alert(x.innerHTML) // pega a tag inteira com estilo

// 2° document.getElementById()[] pega o elemento pelo seu id

//<div id='teste'>Oi</div>
document.getElementById('teste');
teste.style.backgroundColor = 'white';

// 3° document.getElementsByName()[] pega o elemento pelo seu name

var p2 = document.getElementsByName('paragrafo1')[0]
p2.style.fontFamily = 'Comic Sans'

// 4° document.getElementsByClassName(')[] pega o elemento por class

var h1 = document.getElementsByClassName('h1')[0]
h1.style.fontSize = '10pt'

//5° document.querySelector()

var n = document.querySelector('div#msg') // . pra class
var n = document.querySelector('div.msg') // # para id
