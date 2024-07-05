//////////////////////////// Operadores Relacionais ////////////////////////////

5 > 2 // 5 é maior que 2 // true
7 < 4 // 7 é menor que 4 // false
8 >= 8 // 8 é maior ou igual que 8 // true
9 <= 7 // 9 é menor ou igual a 7 // false
5 == 5 // 5 é igual a 5 // true
4 != 4 // 4 é diferente de 4 // false

var a = 2
var b = 8

console.log(a < b) // true
console.log(a <= b - 10) // false

//////////////////////////// Operadores de Identidade ////////////////////////////

/* O javaScript considera valores iguais mesmo sendo de tipos diferentes, pois o valor deles estão na mesma grandeza, por exemplo: */

5 == '5' // 5 é igual a '5' // true

/* Para indentificar se dois valores são IDÊNTICOS e tem o mesmo tipo usamos === */

5 === '5' // 5 é idêntico a '5' // false 

/* mesma lógica para diferente idêntico !== */

5 != '5' // 5 é diferente de '5' // false

5 !== '5' // 5 tem o tipo diferente de '5' // true

//////////////////////////// Operadores Lógicos ////////////////////////////

! /* negação ou é true ou é false */
a && b /* conjução (e) só é true se os dois valores forem true, se não false */
a || b /* disjunção (ou) é true se um dos valores forem true, se não false */


/* na ordem de precedencia: Primeiro aritméticos, depois relacionais e por fim lógicos
em casos de ter os 3 operadores lógicos em uma expressão a ordem é: ! && ||  */ 

var a = 5
var b = 8

console.log(
  a > b && b % 2 == 0, // false

  a <= b || b / 2 == 2 // true

)

// exemplos:

idade >= 15 && idade <= 17 // a idade esta entre 15 a 17? (maior ou igual a 15 ou menor igual a 17)

estado == 'RJ' || estado == 'SP' // mora em RJ ou SP? *(estado é igual a RJ ou estado é igual a SP)

salário > 1500 && sexo != 'M' // O salário é acima de 1500 e não é homem? (o salário é maior que 1500 e sexo é diferente de masculino)


//////////////////////////// Operadores Térnario ////////////////////////////

expressão_1 ? expressão_2 : expressão_3 // analisa se uma a primeira expressão é true ou false e retorna a expresão 2 para true e a expresão 3 para false

teste ? true : false //

media >= 6 ? 'Você foi aprovado' : 'Você foi reprovado' // se media for true retorna a primeira expressão, se media for false retorna a segunda expresão

//exemplo:

var x = 8

var res = x % 2 == 0 ? 5 : 9 
console.log(res); // resultado é 5

var idade = 17

var consumoBebidaAlcolica = idade >= 18 ? 'Você não é proibido de beber' : 'Você é proibido de beber';
console.log(consumoBebidaAlcolica); // resultado é 'Você é proibido de beber' 