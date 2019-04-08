var a = prompt ('Введите число');
a = parseInt(a, 10);
var b = prompt ('Введите  степерь для возведения числа');
b = parseInt(b, 10);
function functionmathDegree(number,degree) {
    if (degree === 1) {
        return number;
    }
    else {
        return number * functionmathDegree(number, degree - 1);
    }
}
alert(functionmathDegree(a,b));