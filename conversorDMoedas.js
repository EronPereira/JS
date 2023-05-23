document.write("Conversor de moedas");
var dolar = parseFloat(prompt("Informe a cotação do dolar: R$"));
var qtd = parseFloat(prompt("Quantos dolares serão convertidos para reais"));
var conversao = dolar * qtd;
alert(conversao);