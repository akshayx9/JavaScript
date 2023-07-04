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

function calculateResult(calcType){
    const enteredNum = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;
    if(calcType === 'ADD') {
        currentResult += enteredNum;
        mathOperator = '+';
    } else if(calcType === 'SUBTRACT') {
        currentResult -= enteredNum;
        mathOperator = '-';
    } else if(calcType === 'MULTIPLY') {
        currentResult *= enteredNum;
        mathOperator = '*';
    } else {
        currentResult /= enteredNum;
        mathOperator = '/';
    }
    createAndWriteOutput(mathOperator, initialResult, enteredNum);
    writeToLog(calcType, initialResult, enteredNum, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
}
function multiply() {
   calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);