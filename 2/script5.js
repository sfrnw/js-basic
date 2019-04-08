var a = prompt ('Введите число a');
a = parseInt(a, 10);
var b = prompt ('Введите число b');
b = parseInt(b, 10);
function functionPlus(a,b) {
    return a+b;
}
function functionMinus(a,b) {
    return a-b;
}
function functionMultiplication(a,b) {
    return a*b;
}
function functionDivision(a,b) {
    return a/b;
}
alert('Сложение');
alert(functionPlus(a,b));
alert('Вычитание');
alert(functionMinus(a,b));
alert('Умножение');
alert(functionMultiplication(a,b));
alert('Деление');
alert(functionDivision(a,b));