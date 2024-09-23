// exercicio

var idade = 16

if (idade < 18) {
  console.log('Não Vota');
} else {
  if (idade >= 16 && idade < 18) {
    console.log('Voto Opcional');
  }
} 



// Treino

var idade = 17;

if (idade >= 18) {
  console.log('Maior de idade');

  if (idade >= 16) {
    console.log('Você já pode votar');
  } 
} else {
  
  console.log('Menor de Idade');

  if (idade >= 16) {
    console.log('Você já pode votar');
  } else {
    console.log('Voce ainda não pode votar');
  }

}

