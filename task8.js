// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.



function findSecondSmallest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return null;
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];

        if (currentNumber < smallest) {
            secondSmallest = smallest;
            smallest = currentNumber;
        } else if (currentNumber < secondSmallest && currentNumber !== smallest) {
            secondSmallest = currentNumber;
        }
    }

    if (secondSmallest === Infinity) {
        return null;
    }

    return secondSmallest;
}

// Example usage:
const numbers = [7, 2, 1, 0, 8, 4, 5];
const secondSmallestNumber = findSecondSmallest(numbers);
console.log(secondSmallestNumber);