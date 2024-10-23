// Repetições

// A repetição funciona da seguinte forma: se a condição for verdadeira o codigo será repetido até que a condição continue verdadeira , se não for o codigo para de ser executado https://prnt.sc/PBrztIWEFFWo

// WHILE (ENQUANTO) estrutura de repetição com teste logico no final

var n = 1  // contador

while (n <= 6) { 
  n++ 
  console.log(`Repetição ${n}`);
}

// DO (FAÇA) estrutura de repetição com teste logico no inicio

var x = 1  // contador

do {
  x++ 
  console.log(`Repetição ${x}`);
} while (x <= 6);

// mao na massa

var fatia = 9

function comerPizza() {
  while (fatia >= 2) {
    fatia--
    console.log(`Comi a fatia: ${fatia}`);
  
  }
}

console.log(comerPizza());