alert("Calculo ICMS e COFINS");
var preco = parseFloat(prompt("Preço do produto: "));
var icms = preco * 0.15;
var cofins = preco * 0.07;
document.write("ICMS: " + icms + "<br>COFINS: " + cofins.toFixed(2));