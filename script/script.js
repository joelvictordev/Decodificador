var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#resultado");

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('resultado').innerHTML = '<textarea class="resultadoscript" readonly id="input-texto">' + resultCripto + '</textarea>' + '<button class="botoes__copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('resultado').innerHTML = '<textarea class="resultadoscript" readonly id="input-texto">' + resultDescripto + '</textarea>' + '<button class="botoes__copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoCop = document.getElementById('resultado').querySelector('textarea');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
} 