function repeatString(str, numTimes) {
    let repeatedString = "";
    for (let i = 0; i < numTimes; i++) {
        repeatedString += str;
    }
    return repeatedString;
}

// Example usage:
let originalString = "Hello";
let repeatedTimes = 3;
console.log("Repeated string:", repeatString(originalString, repeatedTimes));
