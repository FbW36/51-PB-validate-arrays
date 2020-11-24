const validateArray = (arr) =>
  arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);

const validateArray1 = (arr) => arr.filter((el, i) => arr.indexOf(el) === i);

console.log(validateArray1([2, 6, 7, 2, 4, 2, 7, 2]));
