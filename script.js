//get references to the display elements in the HTML
const currentDisplay = document.getElementById("current-operand"); //shows the current number 
const previousDisplay = document.getElementById("previous-operand"); //shows the previous number 

//initialize calculator variables
let currentValue = "0" //stores the currently entered value as string
let previousValue = "" //stores the previous number and operation
let operation = null; // stores the current operation (+,-,*,/)

//function to update the calculator calculator display

function updateDisplay() {
    currentDisplay.textContent = currentValue //update current number display
    previousDisplay.textContent = previousValue //update previous operation display
}

//function to handle number and decimal point input 
function appendToDisplay(number) {
    //if current display shows 0 and input isnt a decimal , clear it first

    if (currentValue === "0" && number !== ".") {
        currentValue = "";
    }

    //prevent adding multiple decimal points
    if (number === "." && currentValue.includes(".")) return;

    currentValue += number;

    updateDisplay();

}



function chooseOperation(op) {
    if (currentValue === "") return;

    if (previousValue !== "") {
        calculate();
    }

    operation = op;

    previousValue = `${currentValue} ${operation}`;
    currentValue = "";
    updateDisplay();

}

function calculate() {
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);

    if (isNaN(prev)) return;

    if (operation === "+") result = prev + current;
    else if (operation === "-") result = prev - current;
    else if (operation === "*") result = prev * current;
    else if (operation === "/") result = prev / current;
    else return;

    currentValue = result.toString();
    operation = null;
    previousValue = "";
    updateDisplay();
}

function clearAll() {
    currentValue = "0";
    previousValue = "";
    operation = null;
    updateDisplay();
}

updateDisplay();