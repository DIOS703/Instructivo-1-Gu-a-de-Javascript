var botonSuma = document.getElementById("btn-suma");
var botonResta = document.getElementById("btn-resta");
var botonMult = document.getElementById("btn-mult");
var botonDiv = document.getElementById("btn-div");
var res = document.getElementById("resultado");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");



botonSuma.addEventListener("click", function() {
    var n1 = num1.value;
    var n2 = num2.value;
    res.innerHTML = parseInt(n1) +parseInt(n2);
});

botonResta.addEventListener("click", function() {
    var n1 = num1.value;
    var n2 = num2.value;
    res.innerHTML = parseInt(n1) -parseInt(n2);
});
botonMult.addEventListener("click", function() {
    var n1 = num1.value;
    var n2 = num2.value;
    res.innerHTML = parseInt(n1)*parseInt(n2);
});
botonDiv.addEventListener("click", function() {
    var n1 = num1.value;
    var n2 = num2.value;
    if(n2==0){
        alert("NO SE PUEDE DIVIDIR POR 0");
    }
    else{
        res.innerHTML = parseInt(n1)/parseInt(n2);
    }
});