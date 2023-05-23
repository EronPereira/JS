alert("Calculo de Borda");
var banheira = parseFloat(prompt("Digite o raio da banheira:"));
var borda = parseFloat(prompt("Digite o raio da borda:")); 
var preco = (3.14 * Math.pow(area)) - (3.14 * borda**2);
alert("O preço é R$"+preco);