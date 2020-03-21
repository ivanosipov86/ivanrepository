do{
    var num1 = +prompt('первое число');
    var num2 = +prompt('второе число');
    var result = num1 + num2;
    alert('результат:' + result);
    var isProcess = confirm('Продолжить?');
} while( isProcess);

function getValues (){
    var result = [];
    var i=0;
    do{
        result[i]=+prompt('Введите число');
        i++;
        var isProcess = confirm('Продолжить?');
    }while(isProcess)
    return result;
}
do {
    var
}