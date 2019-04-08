
var number = +prompt('Введите число от 1 до 1000');
var numberObject = {
    hundreds: 0,
    tens: 0,
    ones: 0,
}
function numbers(numb,numbObject) {
    if (numb > 999) {
        console.log('Четырехзначное число');
    }
    else {
        numbObject.ones = (numb % 100) % 10;
        numbObject.tens = ((numb - numbObject.ones) / 10) % 10;
        numbObject.hundreds = ((numb-numbObject.ones-10*numbObject.tens)/100)%10;
        console.log('Сотни ',numbObject.hundreds,'Десятки: ',numbObject.tens,'Еденицы: ',numbObject.ones)
    }
}
numbers(number,numberObject);