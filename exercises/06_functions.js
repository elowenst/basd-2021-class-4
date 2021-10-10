// Funciones
//item a
function sumA(number1, number2){
    return number1 + number2;
}
sum_A = sumA(10,15);
console.log(sum_A);

//item b
function sumB(number3, number4){
    if (typeof number3 === "number" && typeof number4 === "number"){
        return number3 + number4;
    }else{
        alert("uno de los parámetros no es un número");
        return NaN;
    }
}
sum_B = sumB("s", 15);
console.log(sum_B);

//item c
function validate_integer(number5){
    if (Number.isInteger(number5)){
        return true;
    } else {
        return false;
    }
}
console.log(validate_integer(4));

//item d
function sumD(number6, number7){
    if(typeof number6 === "number" && typeof number7 === "number"){
        if (!validate_integer(number6)){
            alert("No es entero")
            return Math.floor(number6);
        }else if(!validate_integer(number7)){
            alert("No es entero")
            return Math.floor(number6);
        }else{
            return number6 + number7;
        }
    }else{
        alert("uno de los parámetros no es un número");
        return NaN;
    }   
}
console.log(sumD("1.2", 4));

//item e
function validate_number(num3, num4){
    if (typeof num3 === "number" && typeof num4 === "number"){
        return true;
    }
}

function sumE (num5, num6){
    var valid = validate_number(num5, num6);
    if (valid){
        return num5 + num6;
    }else{
        alert("uno de los parámetros no es un número");
        return NaN;
    }
}
console.log(sumE(2, 7));
