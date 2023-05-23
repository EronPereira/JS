document.write("Calculo de Prestação Atrasada<br>");
var valor = parseFloat(prompt("Valor da prestação:"));
var juros = parseFloat(prompt("Valor dos juros:"));
var tempo = parseInt(prompt("Dias em atraso:"));
var final = valor + ((prestacao * juros) / 100 * tempo);
alert("O valor da prestação é: " + final);