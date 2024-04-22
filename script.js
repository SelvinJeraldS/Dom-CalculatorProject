

// Create the calculator container div
var calculatorDiv = document.createElement('div');
calculatorDiv.className = 'calculator';
calculatorDiv.style.width = "auto";

var title = document.createElement('h1');
title.id = 'title';
title.textContent = "Calculator Using Dom";
calculatorDiv.appendChild(title);

var description = document.createElement("p");
description.id = "description";
description.textContent = "Entirely Built Using DOM";
calculatorDiv.appendChild(description);

// Create the display input element
var displayInput = document.createElement('input');
displayInput.type = 'text';
displayInput.id = 'result'; // 
displayInput.className = 'display';
displayInput.setAttribute('readonly', 'readonly');
calculatorDiv.appendChild(displayInput);

// Create the buttons container div
var buttonsDiv = document.createElement('div');
buttonsDiv.id = 'buttons';
buttonsDiv.className = 'buttons';
calculatorDiv.appendChild(buttonsDiv);

document.body.appendChild(calculatorDiv);

// Define the buttons for the calculator
var buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '(', ')', '.', 'C', '=', '/', '⌫']; // Added '⌫' for backspace

// Add keydown event listeners for each button
buttons.forEach(function(label) {
    var button = document.createElement('button');
    button.textContent = label;
    button.addEventListener('click', function() {
        if (label === 'C') {
            clearDisplay();
        } else if (label === '=') {
            calculate();
        } else if (label === '⌫') { // Handle backspace button
            removeLastCharacter();
        } else {
            appendValue(label);
        }
    });
    buttonsDiv.appendChild(button);

    // Add keydown event listener for each button
    button.addEventListener('keydown', function(event) {
        // Get the key that was pressed
        var key = event.key;

        // Trigger button click when corresponding key is pressed
        if (button.textContent === key) {
            button.click();
        }

        // Trigger calculate function when '=' key is pressed
        if (key === '=' || key === 'Enter') {
            calculate();
        }

        // Trigger clearDisplay function when 'C' key is pressed
        if (key === 'C' || key === 'c') {
            clearDisplay();
        }

        // Trigger removeLastCharacter function when 'Backspace' key is pressed
        if (key === 'Backspace') {
            removeLastCharacter();
        }

        // Prevent default action for certain keys to avoid unintended behavior
        if (key === '=' || key === 'Enter' || key === 'C' || key === 'c' || key === 'Backspace') {
            event.preventDefault();
        }
    });
});

// Function to append value to the display
function appendValue(value) {
    var display = document.getElementById('result');
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    var display = document.getElementById('result');
    display.value = '';
}

// Function to remove the last character from the display
function removeLastCharacter() {
    var display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

// Function to evaluate and display the result
function calculate() {
    var display = document.getElementById('result');
    var expression = display.value;
    var result;
    try {
        result = evaluateExpression(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to evaluate an expression with proper order of operations
function evaluateExpression(expression) {
    // Replace 'x' with '*' for multiplication and handle negative numbers
    expression = expression.replace(/x/g, '*').replace(/(?<!\d)-/g, '-1*');

    // Use the built-in eval function to calculate the result
    return eval(expression);
}
var clearButton = document.createElement('button');
clearButton.textContent = 'C';
clearButton.id = 'clear';
clearButton.addEventListener('click', clearDisplay);
buttonsDiv.appendChild(clearButton);

// Create the equal button
var equalButton = document.createElement('button');
equalButton.textContent = '=';
equalButton.id = 'equal';
equalButton.addEventListener('click', calculate);
buttonsDiv.appendChild(equalButton);

// Create the addition button
var addButton = document.createElement('button');
addButton.textContent = '+';
addButton.id = 'add';
addButton.addEventListener('click', function() {
    appendValue('+');
});
buttonsDiv.appendChild(addButton);

// Create the subtraction button
var subtractButton = document.createElement('button');
subtractButton.textContent = '-';
subtractButton.id = 'subtract';
subtractButton.addEventListener('click', function() {
    appendValue('-');
});
buttonsDiv.appendChild(subtractButton);

// // Additional test case buttons
// var testAdditionButtons = ['1', '2', '='];
// var testSubtractionButtons = ['3', '1', '='];


// Additional test case buttons
var testAdditionButtons = ['1', '2', '='];
var testSubtractionButtons = ['3', '1', '='];

// Function to trigger button clicks for test cases
function triggerButtonClicks(buttons) {
    buttons.forEach(function(label) {
        var button = document.querySelector('button:not([id="clear"])[textContent="' + label + '"]');
        button.click();
    });
}

// Test cases for addition and subtraction
describe('Calculator Test Cases', function() {
    it('To perform a simple calculation on addition', function() {
        triggerButtonClicks(testAdditionButtons);
        assert.strictEqual(document.getElementById('result').value, '3', 'Addition result is incorrect');
    });

    it('To perform a simple calculation on subtraction', function() {
        triggerButtonClicks(testSubtractionButtons);
        assert.strictEqual(document.getElementById('result').value, '2', 'Subtraction result is incorrect');
    });
});

