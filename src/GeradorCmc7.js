function gerarCmc7(){
  let numeroCheque = Math.floor(Math.random() * 999999)
  const cmc7Modelo = "3129632d472nnnnnn5009241501056" ;

  let cmc7Novo = cmc7Modelo.replace('nnnnnn', ("000000" + numeroCheque).slice(-6) );

  const digito = calcularDigito(cmc7Novo);
  cmc7Novo = cmc7Novo.replace('d', digito);

  document.getElementById("campo-resultante").value = cmc7Novo;
}

function calcularDigito(cmc7Modelo) {
  let campo = cmc7Modelo.slice(8, 18);
  let multiplicador = 2;
  let acumulador = 0;
  
  for (let i = campo.length - 1; i >= 0; i--) {
    let total = campo.slice(i, i + 1) * multiplicador;
    
    if (total > 9) {
      acumulador += 1 + (total - 10);
    } else {
      acumulador += total;
    }

    multiplicador = multiplicador == 2 ? 1 : 2;
  }

  let digito = 10 - acumulador % 10;

  return digito > 9 ? 0 : digito;
}

// module.exports = gerarCmc7;