var moto = parseFloat(Prompt("Digite o valor da moto: R$"));
var imposto = moto * 0.26;
var seguro = moto * 0.02;
var lucro = moto * 0.08;
var vendedor = moto * 0.01;
document.write(moto + imposto + seguro + lucro + vendedor);