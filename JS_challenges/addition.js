function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Example usage:
let n = 5;
console.log("Summation from 1 to", n, "is", summation(n));
