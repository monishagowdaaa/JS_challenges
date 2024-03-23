function removeCharacters(str, charsToRemove) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!charsToRemove.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

// Example usage:
let originalString = "Hello World!";
let charsToRemove = "aeiou"; // Removing vowels
let modifiedString = removeCharacters(originalString, charsToRemove);
console.log("Original string:", originalString);
console.log("Modified string:", modifiedString);
