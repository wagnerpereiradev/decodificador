var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output");

var criptografar = document.querySelector(".btn-criptografar");
var descriptografar = document.querySelector(".btn-descriptografar");

function criptografarFunction() {
    var text = inputText.value;

    var result1 = text.replace(/e/g, "ertylkjmn");
    var result2 = result1.replace(/i/g, "iytrlkjmn");
    var result3 = result2.replace(/a/g, "asdfgsdfg");
    var result4 = result3.replace(/o/g, "optyrlknmhj");
    var result5 = result4.replace(/u/g, "ujklmnplkjgfds");
    document.getElementById('output').innerHTML = '<textarea readonly id="text">' + result5 + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'



}

function descriptografarFunction() {
    var text = inputText.value;

    var result1 = text.replace(/ertylkjmn/g, "e");
    var result2 = result1.replace(/iytrlkjmn/g, "i");
    var result3 = result2.replace(/asdfgsdfg/g, "a");
    var result4 = result3.replace(/optyrlknmhj/g, "o");
    var result5 = result4.replace(/ujklmnplkjgfds/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="text">' + result5 + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var texto = document.getElementById('text');

    texto.select();
    document.execCommand('copy');
    alert("Texto copiado para área de transferência.");
}