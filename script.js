let operation = "";
let total = 0;
let firstOperand = true;
let operationButtonClicked = false;

let result = document.querySelector("#result");
let moduleBtn = document.querySelector("#module");
let powerBtn = document.querySelector("#power");
let resetBtn = document.querySelector("#reset");
let divisionBtn = document.querySelector("#division");
let multiplicationBtn = document.querySelector("#multiplication");
let subtractionBtn = document.querySelector("#subtraction");
let sumBtn = document.querySelector("#Sum");
let equalBtn = document.querySelector("#equal");

let ceroBtn = document.querySelector("#cero");
let oneBtn = document.querySelector("#one");
let twoBtn = document.querySelector("#two");
let threeBtn = document.querySelector("#three");
let fourBtn = document.querySelector("#four");
let fiveBtn = document.querySelector("#five");
let sixBtn = document.querySelector("#six");
let sevenBtn = document.querySelector("#seven");
let eigthBtn = document.querySelector("#eigth");
let nineBtn = document.querySelector("#nine");
let pointBtn = document.querySelector("#point");  

function displayNumber(number) {
    if (operationButtonClicked) {
        // si se hizo click en +,-,*,/ se resetea la pantalla
        // es necesario resetear la operacion para que la pantalla muestre bien todos los numeros que se presionan
        operationButtonClicked = false;
        result.textContent = "";
    }
    result.textContent = result.textContent + number;
}

function resetCalculator() {
    result.textContent = "";
    total = 0;
    operation = "";
    firstOperand = true;
    operationButtonClicked = false;
}

function sum() {
    operationButtonClicked = true;
    operation = "suma";
    total = total + parseFloat(result.textContent);
    result.textContent = total;
}

function substract() {
    operationButtonClicked = true;
    operation = "resta";
    if (firstOperand) {
        total = parseFloat(result.textContent);
        firstOperand = false;
    } else {
        total = total - parseFloat(result.textContent);
        result.textContent = total;
    }
}

function multiply() {
    operationButtonClicked = true;
    operation = "multiplicacion";
    if (firstOperand) {
        total = parseFloat(result.textContent);
        firstOperand = false;
    } else {
        total = total * parseFloat(result.textContent);
        result.textContent = total;
    }
}

function divide() {
    operationButtonClicked = true;
    operation = "division";
    if (firstOperand) {
        total = parseFloat(result.textContent);
        firstOperand = false;
    } else {
        total = total / parseFloat(result.textContent);
        result.textContent = total;
    }
}

function power() {
    operationButtonClicked = true;
    operation = "power";
    if (firstOperand) {
        total = parseFloat(result.textContent);
        firstOperand = false;
    } else {
        total = total ** parseFloat(result.textContent);
        result.textContent = total;
    }
}

function module() {
    operationButtonClicked = true;
    operation = "module";
    if (firstOperand) {
        total = parseFloat(result.textContent);
        firstOperand = false;
    } else {
        total = total % parseFloat(result.textContent);
        result.textContent = total;
    }
}


function equal() {
    if (operation === "suma") {
        sum();
    } else if (operation === "resta") {
        substract();
    } else if (operation === "multiplicacion") {
        multiply();
    } else if (operation === "division") {
        divide();
    } else if (operation === "power") {
        power();
    } else if (operation === "module") {
        module();
    }
    total = 0;
    operation = "";
    firstOperand = true;
    operationButtonClicked = false;
}

sumBtn.addEventListener('click', sum);
subtractionBtn.addEventListener('click', substract);
multiplicationBtn.addEventListener('click', multiply);
divisionBtn.addEventListener('click', divide);
powerBtn.addEventListener('click', power);
moduleBtn.addEventListener('click', module);
equalBtn.addEventListener('click', equal);
reset.addEventListener('click', resetCalculator);