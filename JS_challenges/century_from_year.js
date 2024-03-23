function centuryFromYear(year) {
    // Use Math.ceil() to round up to the nearest whole number
    return Math.ceil(year / 100);
}

// Example usage:
let year = 2021;
console.log("Century from year", year, "is:", centuryFromYear(year));
