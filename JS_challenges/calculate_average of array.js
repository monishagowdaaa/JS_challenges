function calculateAverage(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return undefined; // Return undefined if the array is empty
    }
    
    let sum = 0;
    // Calculate the sum of all numbers in the array
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    // Calculate the average by dividing the sum by the number of elements
    let average = sum / arr.length;
    
    return average;
}

// Example usage:
let numbers = [5, 3, 9, 2, 7, 1];
console.log("The average of the array is:", calculateAverage(numbers));
