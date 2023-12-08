const arr = [2, 13, 45, 4, 7, 11, 2];

// Filter for numbers greater than 5.
const filteredArray = arr.filter((num) => num > 5);
console.log(filteredArray);

// Map every number to an object which holds the number on some property.
const mappedArray = arr.map((num) => ({ number: num }));
console.log(mappedArray);

// Reduce the array to a single number (product of all numbers)
const product = arr.reduce((prevValue, curValue) => prevValue * curValue, 1);
console.log(product);

// function to find the largest number
function findMinMax(...nums) {
  // using rest paramenter
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }

    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMax, curMin];
}

const [max, min] = findMinMax(...arr);

console.log(min, max); //using spread operator

// create a list which doesn't allow any duplicate values
const list = new Set(arr);
console.log(list);
