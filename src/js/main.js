/*
do{
    var num1 = +prompt('первое число');
    var num2 = +prompt('второе число');
    var result = num1 + num2;
    alert('результат:' + result);
    var isProcess = confirm('Продолжить?');
} while( isProcess);*/

function getValues (){
    var result = [];
    var i = 0;

    do{
        result[i++] = +prompt('Введите число');
        var isProcess = confirm('Продолжить?');
    }while(isProcess);

    return result;
} 

do {
    var numbers = getValues();
    var res = numbers[0];
    

    for(var i = 1; i <numbers.length; i = i + 2) {
        res = res + numbers[i];


alert('Итого:' + res);

var isProcess = confirm('Продолжить');
} while (isProcess); 



function triangle(lines) {
    var line = '*';

    for(var i = 0; i < rows[0]; i++) {
        console.log(line);
        line += '*';
    }
}

var rows = getValues();

triangle(rows[0]);


function  triangleReverse(lines, sign) {
    var strings = [];

    for(var i =0; i < lines; i++) {
        for(var j = 0; j , lines -i; j++) {
            strings[i] += sign;
        }
        console.log(strings[i]);
    }

    for ( var i =strings.lenght -1; i >=0; i--){
        console.log(strings[i]);
    }
}
 triangleReverse(5, '*');