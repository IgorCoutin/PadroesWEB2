function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
  
    var imc = peso / (altura * altura);
    document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2);
  
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.classList.remove("situacao-normal", "situacao-alerta", "situacao-perigo");
  
    if (imc < 18.5) {
      resultadoElement.classList.add("situacao-perigo");
    } else if (imc >= 18.5 && imc < 25) {
      resultadoElement.classList.add("situacao-normal");
    } else {
      resultadoElement.classList.add("situacao-alerta");
    }
  }