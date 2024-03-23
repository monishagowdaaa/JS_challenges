function countVowels(str) {
    // Convert the string to lowercase to make the comparison case-insensitive
    str = str.toLowerCase();
    
    // Define an array containing all vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Initialize a variable to keep track of the vowel count
    let vowelCount = 0;
    
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the current character is a vowel
        if (vowels.includes(str[i])) {
            // If it is, increment the vowel count
            vowelCount++;
        }
    }
    
    // Return the total vowel count
    return vowelCount;
}

// Example usage:
let inputString = "Hello World";
console.log("Number of vowels:", countVowels(inputString));
