alert("Caluclo de media com peso!");
const peso1 = 2, peso2 = 3, peso3 = 5;
var nota1 = parseFloat(prompt("Nota da primeira prova:"));
var nota2 = parseFloat(prompt("Nota da segunda prova:"));
var nota3 = parseFloat(prompt("Nota da terceira prova:"));
var media = ((nota1 * peso1) + (nota2*peso2) + (nota3*peso3)) / (peso1 + peso2 + peso3);
alert("A media é: " + media);