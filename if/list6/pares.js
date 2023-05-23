var n = parseInt(prompt("Digite um numero inteiro:"));
var t, p;
for(i = 0; i <= n; i++){
    p = i%2;
    if(p == 0){
        console.log(i);
        t += i;
    }
    console.log(" + ")
}
console.log(" = " + t);