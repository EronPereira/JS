const comissao = 25;
const salario = 1000;
var qtd_produtos = parseInt(prompt("Informe quanto produtos o vendedor vendeu:"));
var salario_f = qtd_produtos * comissao + salario;
alert("O salário final é: " + salario_f);