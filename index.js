// Get the display
const display = document.getElementById("display");

// Variables
let firstNumber = "";
let secondNumber = "";
let operator = "";

// When a number button is clicked
function appendNumber(number) {

    if (operator === "") {
        firstNumber += number;
    } else {
        secondNumber += number;
    }

    display.value = firstNumber + operator + secondNumber;
}

// When an operator button is clicked
function appendOperation(op) {

    // Prevent operator before entering a number
    if (firstNumber === "") {
        return;
    }

    operator = op;

    display.value = firstNumber + operator;
}

// When = is clicked
function calculate() {

    // Make sure everything is entered
    if (firstNumber === "" || secondNumber === "" || operator === "") {
        return;
    }

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    let result;

    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "*") {
        result = num1 * num2;
    }
    else if (operator === "/") {
        result = num1 / num2;
    }

    display.value = result;

    // Prepare for next calculation
    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
}

// Clear everything
function clearDisplay() {

    firstNumber = "";
    secondNumber = "";
    operator = "";

    display.value = "";
}