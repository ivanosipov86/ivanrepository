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
    
    for(var i = 1; i <numbers.length; i++) {
        res = res + numbers[i];
}

alert('Итого:' + res);

var isProcess = confirm('Продолжить');
} while (isProcess);