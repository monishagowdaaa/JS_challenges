function returnNegative(number) {
    // Check if the number is already negative
    if (number < 0) {
        return number; // If it's negative, return it as is
    } else {
        return -number; // If it's positive, return its negative value
    }
}

// Example usage:
let num = 5;
console.log("Negative value of", num, "is", returnNegative(num));
