/**Validate arrays
Please print each of your answers to the console.

Create a function that accepts array of numbers as argument and returns an valid array of numbers (without repeating exciting elements). The function should WORK dynamically.

Examples:
INPUT [5,3,22,4,5,3,3,3,7] ==> Function🤖 ==> OUTPUT [5,3,22,4,7]
INPUT [1,2,3,2,3,5,3,6,3,1] ==> Function🤖 ==> OUTPUT [1,2,3,5,6]
INPUT [2,6,7,2,4,2,7,2] ==> Function🤖 ==> OUTPUT [2,6,7,4] */

function uniqueNumbers(arrayOfNumbers) {
  counter = [];
  arrayOfNumbers.map((item) =>
    counter.includes(item) ? counter : counter.push(item)
  );

  return counter;
}

let getUniqueNumbers = uniqueNumbers;

console.log(getUniqueNumbers([5, 3, 22, 4, 5, 3, 3, 3, 7])); // [ 5, 3, 22, 4, 7 ]
