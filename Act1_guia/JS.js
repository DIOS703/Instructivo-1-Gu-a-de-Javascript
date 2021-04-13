var boton = document.getElementById("btn");
var res = document.getElementById("resultado");
var minimo = document.getElementById("min");
var maximo = document.getElementById("max");


btn.addEventListener("click", function() {
    var n1 = minimo.value;
    var n2 = maximo.value;
    if (n1>n2){
        res.innerHTML  =  getRndInteger(n2,n1);
    }
    else if (n2>n1){
        res.innerHTML  =  getRndInteger(n1,n2);
    }
    else{
        res.innerHTML = "NO PONER MISMO NUMERO";
    }

});

function getRndInteger(min, max) {
    return parseInt(Math.floor(Math.random() * (parseInt(max) - parseInt(min))  + parseInt(min)));
  }