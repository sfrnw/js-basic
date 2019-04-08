
var i = 1;
var j = 1;
var currentNumber = 1;
function primeNumber(number) {
    for (var i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
while (j<100) {
    if(primeNumber(currentNumber)) {
        console.log(currentNumber);
    }
    currentNumber++;
    j++;
}
