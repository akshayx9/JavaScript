const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert("Greater than 0.7");
} else {
  alert("Not greater than 0.7");
}

let a = [56, 76, 87, 94];
//using for loop
for (let i = a.length - 1; i >= 0; i--) {
  console.log(a[i]);
}
//using for-of loop
for (const num of a) {
  console.log(num);
}

const randomNumber2 = Math.random();

console.log(randomNumber);
console.log(randomNumber2);
if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber < 0.2 ||
  randomNumber2 < 0.2
) {
  alert("Greater than 0.7 or smaller than 0.2");
}
