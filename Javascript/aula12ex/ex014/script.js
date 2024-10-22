function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 6 && hora <= 11) {
    img.src = 'src/manha.png';
    msg.innerHTML = `Bom dia! Agora são ${hora} hora(s)`;
    document.body.style.background = 'rgb(255, 208, 0)';
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'src/tarde.png';
    msg.innerHTML = `Boa Tarde! Agora são ${hora} hora(s)`;
    document.body.style.background = 'rgb(255, 136, 0)';
  } else {
    img.src = 'src/noite.png';
    msg.innerHTML = `Boa Noite! Agora são ${hora} hora(s)`;
    document.body.style.background = 'rgba(0, 0, 0, 0.623)';
  }
}