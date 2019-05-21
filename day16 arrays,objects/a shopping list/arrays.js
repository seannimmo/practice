const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]

// Listing numbers
// Output the number of items in the array to the console. Answer: 19
//console.log(numbers.length);

// Output the number at the index 13 to the console. Answer: -10
//console.log(numbers[13]);

// Output the number which is exactly in the middle of the array.
//console.log(numbers[(numbers.length+1)/2]);

// Output every number in the array to the console.
 console.log(numbers);

// Output the square of every number to the console.
//numbers.forEach(num => console.log(Math.pow(num, 2)));

// Output only negative numbers from the array.
// const negative = numbers.filter(num => num < 0);
// console.log(negative);

// Output an absolute value of every number in the array.
//numbers.forEach(num => console.log(Math.abs(num)));

// Output only those numbers which absolute value id divisible by 3.
// const divis = numbers.filter(num => num % 3 === 0);
// console.log(divis);


// Output only even numbers from the array.
// for (i=0; i<numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         console.log(numbers[i]);
//     }
// }

// Output the difference of every number in the array from number 5.
console.log(numbers.map((num, i) => num-numbers[5]));


// Output the squared difference of every number in the array from number 5.
console.log("what?")

// Output all the numbers who are greater then their predecessor in the atray.
// for(i=0; i<numbers.length; i++){
//     if(numbers[i]>numbers[i-1]) {
//         console.log(numbers[i]);
//     }
// }

// Output all the peaks in the array. A peak is a number whose predecessor and succesor are both smaller then the number itself.
// const peaks = numbers.filter((num, i) => {
//     return num > numbers[i-1] && num > numbers[i+1];
// });
// console.log(peaks);

// Counting
// Count how many negative numbers are there in the array.
// let counter = 0;
// for(i=0; i<numbers.length; i++){
//     if(numbers[i]<0){
//         counter++;
//     }
// }
// console.log(counter);

// Compute the sum of all the numbers in the array. Answer: 70
// let sum = 0;
// numbers.forEach(num => sum=num+sum);
// console.log(sum);

// Compute the average of the numbers in the array. Answer: 3.68421...
// let average = sum / numbers.length;
// console.log(average);

// Compute the sum of all the positive numbers in the array.
// let posSum = 0;
// let pos= numbers.filter(num => num>0);
// pos.forEach(num => posSum=num+posSum);
// console.log(posSum);

// First, compute the average number in the array and save the result in variable. Then compute the sum of squared differences from the average. Answer: 6188.1052...
// let squareSum = 0;
// numbers.forEach(num => squareSum = squareSum + Math.pow((num-average), 2));
// console.log(squareSum);

// Compute the variance of the array. Variance is the average of squared differences from the average. Answer: 325.6897...
// console.log(squareSum/numbers.length);

// Searching
// Find the length of the longest ascending sequence of consecutive numbers in the array.
counter = 0;
let ascArr = [];
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i-1]) {
        counter++;
        ascArr.push(counter);
    }
    else {
        counter=0;
    }
}
console.log(ascArr);

// Find the longest sequence of consecutive numbers which is either ascending or descending.

// Find the biggest element in the array
let largest = 0;
numbers.forEach(num => { 
    if (num > largest) {
        largest = num;
    }
});
console.log(largest);

// Find the second biggest element in the array.
// Find the lowest peak and the highest valley in the array.
// Transformation
// From the original array create a new array with a reversed order of the elements.
let reversed = [];
for (i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}
console.log(reversed);

// From the original array create a new array with the elements randomly shuffled. Use the Math.random method to help you with randomness.
let randomized = [];


// From the original array create a new array with the elements sorted from lowest to highest.
let ascend = [];
let lowest = 0;
for (i = 0; i < numbers.length; i++){
    if(numbers[i] < lowest){
        lowest = numbers[i];
    }
}
ascend.push(lowest);
console.log(ascend);
for (i = 0; i < numbers.length; i++){
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < lowest && numbers[i] > numbers[i-1]) {
            lowest = numbers[i];
        }

        ascend.push(lowest);
    }
}
console.log(ascend);
