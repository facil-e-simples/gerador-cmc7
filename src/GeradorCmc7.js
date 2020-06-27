function gerarCmc7(){
  let numeroCheque = Math.floor(Math.random() * 999999)

  let cmc7Novo = getModelo().replace('nnnnnn', ("000000" + numeroCheque).slice(-6) );
  const digito = calcularDigito(cmc7Novo);
  cmc7Novo = cmc7Novo.replace('d', digito);

  document.getElementById("campo-resultante").value = cmc7Novo;
}



function getModelo() {
  const cmc7Modelo = [
    "3129632d472nnnnnn5009241501056",
    "7564238d033nnnnnn5900052800108"];

  // let index = Math.floor(Math.random() * 2);
  return cmc7Modelo[0];
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

function myFunction() {
  var copyText = document.getElementById("campo-resultante");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copiado!";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copie o CMC7";
}