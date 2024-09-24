function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var saud = document.getElementById('saudacoes')
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = 'src/manha.png';
    saud.innerHTML = 'Bom Dia!'
    document.body.style.background = 'rgb(255, 208, 0)';
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'src/tarde.png';
    saud.h2.innerText = 'Boa Tarde!'
    document.body.style.background = 'rgb(255, 136, 0)'
  } else {
    img.src = 'src/noite.png';
    document.body.style.background = 'rgba(0, 0, 0, 0.623)'
  }
}
