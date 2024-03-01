let display = document.querySelector('.display');

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (display.value === '') return;
    if (isOperator(display.value.slice(-1))) return;
    display.value += operator;
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}