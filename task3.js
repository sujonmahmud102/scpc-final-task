// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 


function findMostFrequentElement(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    const frequencyCounter = {};

    arr.forEach((element) => {
        frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;
    });


    let mostFrequentElement;
    let maxFrequency = 0;


    for (const element in frequencyCounter) {
        if (frequencyCounter[element] > maxFrequency) {
            maxFrequency = frequencyCounter[element];
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}


const inputArray = [];
const mostFrequent = findMostFrequentElement(inputArray);
console.log(mostFrequent);