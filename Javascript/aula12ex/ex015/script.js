function search() {
  if(event.key === 'Enter') {
      verificar()       
  }
}

function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.querySelector('div#res');
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!');
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fsex[0].checked) {
      genero = 'Homem';
      if (idade >= 1 && idade <= 10) {
        // criança
        img.setAttribute('src', 'src/H_crianca.png');
        res.innerHTML = `Se ele  nasceu em ${fano.value}, atualmente é uma criança de ${idade} anos!`;
      } else if (idade < 30) {
        // jovem
        img.setAttribute('src', 'src/H_jovem.png');
        res.innerHTML = `Se ele  nasceu em ${fano.value}, atualmente é um jovem de ${idade} anos!`;
      } else if (idade < 50) {
        // adulto
        img.setAttribute('src', 'src/H_adulto.png');
        res.innerHTML = `Se ele  nasceu em ${fano.value}, atualmente é um adulto de ${idade} anos!`;
      } else if (idade >= 150){
        img.setAttribute('src', 'src/skeleton.png');
        res.innerHTML = `Se ele  nasceu em ${fano.value}, atualmente tem ${idade} anos (alguns não muito vivos)`;
      } else {
        // idoso
        img.setAttribute('src', 'src/H_idoso.png'); 
        res.innerHTML = `Se ele nasceu em ${fano.value}, atualmente é um idoso de ${idade} anos!`;
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher';
      if (idade >= 1 && idade <= 10) {
        // criança
        img.setAttribute('src', 'src/M_crianca.png');
        res.innerHTML = `Se ela nasceu em ${fano.value}, atualmente é uma criança de ${idade} anos!`;
      } else if (idade < 30) {
        // jovem
        img.setAttribute('src', 'src/M_jovem.png');
        res.innerHTML = `Se ela nasceu em ${fano.value}, atualmente é uma jovem de ${idade} anos!`;
      } else if (idade < 50) {
        // adulto
        img.setAttribute('src', 'src/M_adulto.png');
        res.innerHTML = `Se ela nasceu em ${fano.value}, atualmente é uma adulta de ${idade} anos!`;
      } else if (idade >= 150){
        img.setAttribute('src', 'src/skeleton.png');
        res.innerHTML = `Se ela nasceu em ${fano.value}, atualmente tem ${idade} anos (alguns não muito vivos)`;
      } else {
        // idoso
        img.setAttribute('src', 'src/M_idoso.png');
        res.innerHTML = `Se ela nasceu em ${fano.value}, atualmente é uma idosa de ${idade} anos!`;
      }
    }
    res.appendChild(img);
  }
}

