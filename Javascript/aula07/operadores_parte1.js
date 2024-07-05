////////////////////////// Operadores Artméticos ////////////////////////////

5 + 2 // 7 adição 
5 - 2 // 3 subtração
5 * 2 // 10 multiplicação
5 / 2 // 2.5 divisão real
5 % 2 // 1 resto da divisão
5 ** 2 // 25 potência -> 5 ao quadrado

//*** Ordem de precedencia:

/*
Primeiro
|    () 
|    **   
|    * / %
|    + -
Por ultimo
*/

5 + 3 / 2 // 6.5 neste caso a divisão e feita e depois somada ao 5 pois é a ordem aritimética da conta

(5 + 3) / 2 // neste caso a soma é feita primeiro e depois dividida pois o parentese muda a ordem de precendencia do calculo

var a = 5 + 3 // 8
var b = a % 5 // 3
var c = 5 * b ** 2 // 45
var d = 10 - a / 2 // 6
var e = 6 * 2 / d // 2
var f = b % e + 4 / e // 3

//*** Auto-atribuições

var n = 3
n = n + 4   
n = n - 5
n = n * 4
n = n / 2
n = n ** 2
n = n % 5

// ou

n += 4
n -= 5
n *= 4
n /= 2
n **= 2
n %= 5

//////////////////////////// Operadores De Incremento ////////////////////////////

n += 4 // é igual a n = n + 4 
n++ // é igual a n += 4 

n = n - 5 // é igual a n = n - 5 
n-- // é igual a n -= 5  

// Pré/Pós Incremento/ Decremento
++n
--n 