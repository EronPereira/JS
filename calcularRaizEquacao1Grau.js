document.write("Calculo de equacação 1º Grau");
var a = parseFloat(prompr("Valor de a:"));
var b = parseFloat(prompt("Valor de b:"));

if(a == 0){
    alert("Não é uma equação de 1º grau");
}else{
    var raiz = -b / a;
    alert("A raiz é: " + raiz);
}
