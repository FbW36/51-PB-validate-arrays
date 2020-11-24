let number = [5, 3, 22, 4, 5, 3, 3, 3, 7];

let unique = number.reduce((acc, cur) => {
  if (!acc.includes(cur)) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(unique);

function unique2(numbers) {
  let newnumber = [];
  for (num of numbers) {
    if (!newnumber.includes(num)) {
      newnumber.push(num);
    }
  }
  return newnumber;
}

console.log(unique2([5, 3, 22, 4, 5, 3, 3, 3, 7]));
