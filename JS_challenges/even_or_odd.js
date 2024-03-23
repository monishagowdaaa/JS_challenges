function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example usage:
let num = 7;
console.log(num + " is " + checkEvenOrOdd(num));
