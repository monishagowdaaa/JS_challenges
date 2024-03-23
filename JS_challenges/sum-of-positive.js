function sumOfPositive(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

// Example usage:
let numbers = [1, -2, 3, -4, 5];
console.log("Sum of positive numbers:", sumOfPositive(numbers));
