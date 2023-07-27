// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.



function twoSum(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    let indices = [];

    while (i < j) {
        const sum = nums[i] + nums[j];
        if (sum === target) {
            indices = [i, j];
            break;
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }

    return indices;
}


const nums = [1, 3, 6, 8, 11, 15];
const target = 9;

const indices = twoSum(nums, target);

console.log(indices);