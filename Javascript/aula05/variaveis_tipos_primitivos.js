////////////////////// Váriaveis ///////////////////////

// apenas podemos usar todos os tipos de aspas '' "" `` porém elas tem algumas diferenças

var n1 = 5
let n2 = "ola"
var n3 = true
let $ = 2
let _ = 14
// let 2a = 2
let média = 2.5
let π = 3.14
let sem_espaço = "funciona"
// let com espaço = "nao funciona"
// let var = "usar palavras reservadas não funciona"

// var é a chamada de uma variavel (o mesmo para let)

/* n1,n2... é o indentifacador da varíavel. 
  Regras para declarar um identificador:
  - Podem começar com letra, $ ou _
  - Não podem começar com números
  - É possível usar letras ou números (n1,n2...)
  - É possivel usar acentos e símbolos (média, pi)
  - Não podem conter espaços (usar _ para separar)
  - Não podem ser usadas palavras reservadas

  Dicas:
  - Declarar o indentifacador em maiusculo ou minusculo faz diferença e cria duas variaveis (a, A, b, B)
  - Tente usar nomes coerentes para variaveis, n seja contador, nem alfabetizador e nem matematico (n1,n2,a1, a2, x1, x2)
*/

// = um simbolo de = igual sozinho significa "algo recebe algo" no caso, a variavel n1 recebe o valor 5

// 5,"ola"... é 

////// /////// Tipos Primitivos Primordiais ///////////

5, 15, -21, 0.1, -15.9, 8.0 // number
true, false // Boolean
'Google', "JavaScript", `Maria <3` // string

////// /////// Data Types ///////////

/* number {
  infinity 
  NaN (not a number)
}

string

boolean

null (nulo)

undefined (indefinido)

object {
  array
}

function

*/

let dado1 = 2;
typeof dado1 // no terminal, resultado: number
typeof 1 // no terminal, resultado: number
typeof [] // no terminal, resultado: object
typeof {} // no terminal, resultado: object
typeof function (){}; // no terminal, resultado: function
typeof NaN // no terminal, resultado: number
typeof Infinity // no terminal, resultado: number
typeof null // no terminal, resultado: para o java null é um objeto mesmo sendo o tipo de dato null
