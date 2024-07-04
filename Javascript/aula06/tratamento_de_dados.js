// Podemos guardar um dado inserido pelo usario em uma variavel

var nome = window.prompt('Qual seu nome?');

// e depois usar essa variavel para mostrar o dado inserido 

window.alert('Prazer, ' + nome + '!')

// Adição e Concatenação

/*

number + number = soma (1 + 1 = 2)
string + string = concatenação ('41' + '2' = 412)

*/

// Conversão de dados

Number.parseInt(n) // converte para um numero inteiro
Number.parseFloat(n) // converte para um numero real (com virgula, no js .)

String(n) // converte para string
n.toString() // converte para string 


// Formatando Strings

var nome = 'Nathan'
var idade = 23
console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos') // essa forma de concatenar é trabalhosa e confusa

// Por isso podemos usar o template strings:

console.log(`Meu nome é ${nome} e tenho ${idade} anos`);

nome.length // quantos caracteres a string tem
nome.toUpperCase // tudo maiúsculo
nome.toLowerCase // tudo minúsculo.

// Formatando Numbers

var n1 = 123.34
n1.toFixed(3) // aumenta as casas, resultado 123.3400
n1.toFixed(3).replace('.',',') // troca ponto por virgula 
console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})) // converte o numero para a moeda selecionada
console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'}))

console.log(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR'}))