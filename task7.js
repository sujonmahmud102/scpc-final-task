// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.


function romanToInt(roman) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const currentNumeral = roman[i];
        const nextNumeral = roman[i + 1];
        const currentIntValue = romanNumerals[currentNumeral];
        const nextIntValue = romanNumerals[nextNumeral];

        if (nextIntValue > currentIntValue) {
            result += (nextIntValue - currentIntValue);
            i++;
        } else {
            result += currentIntValue;
        }
    }

    return result;
}

// Example usage:
const romanNumeral = "XIM";
const integerValue = romanToInt(romanNumeral);
console.log(integerValue);