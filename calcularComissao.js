alert("Calculo de comissão...");
var venda = parseFloat(prompt("Informe o valor da venda:"));
var porc_comissao = parseFloat(prompt("Informe a porcentagem da comissão:"));
var comissao = (venda * porc_comissao) / 100;
alert("O valor da comissão é de: R$" + comissao); 