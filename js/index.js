
//Exchange usd/btc- btc/usd:

let rate = 42000;
function subtract(){
    let currentValue = document.querySelector(".input-1").value;
    let result = (currentValue / rate).toFixed(2);
    
    document.querySelector(".result-1").innerHTML = currentValue + " $ = " + result + " BTC";
}


function subtractReverse(){
    let currentValue = document.querySelector(".input-2").value;
    let result = (currentValue / rate).toFixed(2);
    
    document.querySelector(".result-2").innerHTML = currentValue + " $ = " + result + " BTC";
}

// Функция subtract() будет выполнять вычитание двух чисел и возвращать результат.
function subtract(){
    let currentValue1 = +document.querySelector(".input-3").value;
    let currentValue2 = +document.querySelector(".input-4").value;
    let result = currentValue1 - currentValue2;
    
   console.log(result);
   document.querySelector(".result-3").innerHTML = result;
}

//Функция multiply() будет выполнять умножение двух чисел и возвращать результат.

function multiply(){
    let currentValue1 = +document.querySelector(".input-5").value;
    let currentValue2 = +document.querySelector(".input-6").value;
    let result = currentValue1 * currentValue2;
    
   console.log(result);
   document.querySelector(".result-4").innerHTML = result;
}
// Функция divide() будет выполнять деление двух чисел и возвращать результат.

function divide(){
    let currentValue1 = +document.querySelector(".input-7").value;
    let currentValue2 = +document.querySelector(".input-8").value;
    let result = currentValue1 / currentValue2;
    
   console.log(result);
   document.querySelector(".result-5").innerHTML = result;
}