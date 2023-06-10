//alert('This works!');
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput(){
    return parseInt(userInput.value)
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNum) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(opertationIdentifier, prevResult, operationNum, newResult) {
    const logEntry = {
        operation: opertationIdentifier,
        prevResult: prevResult,
        number: operationNum,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNum;
    createAndWriteOutput('+', initialResult, enteredNum);
    writeToLog('ADD', initialResult, enteredNum, currentResult);
}

function subtract() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNum;
    createAndWriteOutput('-', initialResult, enteredNum);
    writeToLog('SUBTRACT', initialResult, enteredNum, currentResult);
}
function multiply() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNum;
    createAndWriteOutput('*', initialResult, enteredNum);
    writeToLog('MULTIPLY', initialResult, enteredNum, currentResult);
}

function divide() {
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNum;
    createAndWriteOutput('/', initialResult, enteredNum);
    writeToLog('DIVIDE', initialResult, enteredNum, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);