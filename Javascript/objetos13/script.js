// let carro = "ford"; // Váriavel simples

// Objeto definido = objeto literal

const carro = { 
  marca: 'ford', 
  modelo: 'Ka', 
  ano: 2015, 
  placa: 'abc1234',
  // buzina: function(){alert('biii')}, // Método
  completo: function () {
    return `A marca é ${this.marca} e o modelo é ${this.modelo}`
  }
};

console.log(carro); // mostra o objeto

console.log(carro.ano); // mostra um valor especifico 

console.log(carro["modelo"]); // exibindo pelo valor 

// Chamar um método

// carro.buzina();



// o this. serve pra utilizar um valor de dentro do objeto

console.log(carro.completo());
