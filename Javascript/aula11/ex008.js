var vel = 60.5 // velocidade carro em km

function radar() {
  if (vel <= 60) {
    console.log(`Você está dentro do limite de velcidade! (${vel} Km/h)`);
  } else {
    console.log(`Você ultrapassou o limite de velcidade! (${vel} Km/h)`);
  }
}

console.log(radar());














