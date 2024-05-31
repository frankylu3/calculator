const display = document.getElementById("display")
let curr_equation = ''
let operation = ''

const plus = document.getElementById('operation-plus')
const minus = document.getElementById('operation-minus')
const multiply = document.getElementById('operation-multiply')
const divide = document.getElementById('operation-divide')

plus.addEventListener('click', () => {
    operation = '+'
    resetOperationColors()
    plus.style.backgroundColor = '#ffac09'
});
minus.addEventListener('click', () => {
    operation = '-'
    resetOperationColors()
    minus.style.backgroundColor = '#ffac09'
});
multiply.addEventListener('click', () => {
    operation = '*'
    resetOperationColors()
    multiply.style.backgroundColor = '#ffac09'
});
divide.addEventListener('click', () => {
    operation = '/'
    resetOperationColors()
    divide.style.backgroundColor = '#ffac09'
});

function appendToDisplay(input) {
    if (display.value === 'Error' || display.value === 'undefined' || (display.value === '0' && operation === '')) {
        display.value = input
    } else if (operation != '') {
        resetOperationColors()
        curr_equation = curr_equation + display.value + operation
        display.value = input
        operation = ''
    } else {
        display.value += input
    }
}

function clearDisplay() {
    display.value = '0'
    curr_equation = ''
    resetOperationColors()
}

function calculate() {
    try {
        curr_equation = curr_equation + display.value
        display.value = eval(curr_equation)
        curr_equation = ''
    } catch(err) {
        display.value = 'Error'
    }
}

function convertPlusMinus() {
    if (display.value === '0') {        
        return
    }

    if (Array.from(display.value)[0] === '-') {
        display.value = display.value.substring(1)
    } else {
        display.value = '-' + display.value
    }
}

function convertPercent() {
    if (display.value === '0') {
        return
    }

    display.value = String(Number(display.value)/100)
}

function resetOperationColors() {
    plus.style.backgroundColor = '#3a4452'
    minus.style.backgroundColor = '#3a4452'
    multiply.style.backgroundColor = '#3a4452'
    divide.style.backgroundColor = '#3a4452'
}