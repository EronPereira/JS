var salario = parseFloat(prompt("Informe o salário liquído do funcionário:"));
var liquido = salario - (salario * 0.09);
alert("O valor do salário com desconto do INSS é: R$" + liquido);