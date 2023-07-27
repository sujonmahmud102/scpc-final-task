// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error: Cannot divide by zero';
            }
            return num1 / num2;
        default:
            return 'Error: Invalid operator';
    }
}


const number1 = 10;
const number2 = 10;
const operation = '/';
const result = calculator(number1, number2, operation);
console.log(result);