// Validate Arrays

const inputArray = [5,3,22,4,5,3,3,3,7];

noDuplicateArray = inputArray.filter((item, pos) => 
    inputArray.indexOf(item) == pos);

console.log('\n\n', noDuplicateArray)