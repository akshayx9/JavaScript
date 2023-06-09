//alert('This works!');
const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput(){
    return parseInt(userInput.value)
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNum) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function add() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNum;
    createAndWriteOutput('+', initialResult, enteredNum)
}

function subtract() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNum;
    createAndWriteOutput('-', initialResult, enteredNum)
}
function multiply() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNum;
    createAndWriteOutput('*', initialResult, enteredNum)
}

function divide() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNum;
    createAndWriteOutput('/', initialResult, enteredNum)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);