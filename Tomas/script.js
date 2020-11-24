// Create a function that accepts array of numbers as argument and returns an valid array of numbers (without repeating exciting elements). The function should WORK dynamically

const getSingleValues = arr => arr.filter((num,idx) => arr.indexOf(num) === idx)
console.log('getSingleValues-->', getSingleValues([5,3,22,4,5,3,3,3,7]))
console.log('getSingleValues-->', getSingleValues([1,2,3,2,3,5,3,6,3,1]))
console.log('getSingleValues-->', getSingleValues([2,6,7,2,4,2,7,2]))