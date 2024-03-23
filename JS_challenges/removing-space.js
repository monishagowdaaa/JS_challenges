function removeSpaces(str) {
    return str.replace(/\s/g, '');
}

// Example usage:
let inputString = "Hello World";
let stringWithoutSpaces = removeSpaces(inputString);
console.log("String without spaces:", stringWithoutSpaces);
