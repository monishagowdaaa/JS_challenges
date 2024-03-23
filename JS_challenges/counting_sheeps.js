function countSheep(arr) {
    let sheepCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            sheepCount++;
        }
    }
    return sheepCount;
}

// Example usage:
let sheepArray = [0, 1, 0, 1, 1, 0, 1, 1];
console.log("Number of sheep present:", countSheep(sheepArray));
