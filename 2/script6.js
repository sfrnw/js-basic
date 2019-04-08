var a = prompt ('Введите число a');
a = parseInt(a, 10);
var b = prompt ('Введите число b');
b = parseInt(b, 10);
var c = prompt ('Введите выполняемую операцию: + - * /');
function functionmathOperation(arg1,arg2,operation) {
    switch (operation) {
        case '+':
            return arg1 + arg2;
            break;
        case '-':
            return arg1 - arg2;
            break;
        case '*':
            return arg1 * arg2;
            break;
        case '/':
            return arg1 / arg2;
            break;
    }
}
alert(functionmathOperation(a,b,c));