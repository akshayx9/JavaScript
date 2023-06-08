//alert('This works!');
const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

currentResult = add(1, 2);

let calculationDecription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDecription);