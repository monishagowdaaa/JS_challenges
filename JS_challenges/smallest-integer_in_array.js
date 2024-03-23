function findSmallestInteger(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        return undefined; // Return undefined if the array is empty
    }
    
    let smallest = arr[0]; // Initialize smallest with the first element of the array
    
    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // If the current element is smaller than the current smallest, update smallest
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    
    return smallest; // Return the smallest integer
}

// Example usage:
let numbers = [5, 3, 9, 2, 7, 1];
console.log("The smallest integer in the array is:", findSmallestInteger(numbers));
