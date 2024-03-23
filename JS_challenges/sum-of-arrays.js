function addArrays(arr1, arr2) {
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
        return "Arrays must have the same length.";
    }
    
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}

// Example usage:
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
console.log("Result of array addition:", addArrays(array1, array2));
