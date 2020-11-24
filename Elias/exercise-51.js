const reapetingNumbers = (array) => {
    const newArray = [];
    array.map((item) => !newArray.includes(item) && newArray.push(item))
    return newArray
}

console.log(reapetingNumbers([1,1,1,2,32,1,43,45,5,5,5,3]));