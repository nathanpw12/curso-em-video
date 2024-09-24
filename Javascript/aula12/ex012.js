var relogioSys = new Date()
var hora = relogioSys.getHours()

// var hora = 2  // Formato 24 horas, 00:00 = 24

console.log(`Agora são exatamente ${hora}`);

if (hora <= 11 && hora >= 6) { // menor que 12 e maior 6 -> 6 ás 12 -> Bom dia 
  console.log('Bom dia');
} else if (hora >= 12 && hora <= 18) { // Boa tarde
  console.log('Boa tarde');
} else if (hora >= 19 && hora <= 23) { 
  console.log('Boa noite');
} else {
  console.log('Boa Madrugada');
}
