const numbers = document.getElementsByClassName("btns__numbers");
const functions = document.getElementsByClassName("btns__funcs");
const calcBox = document.getElementById("btns__calcBox");
const visualBox = document.getElementById("btns__visualBox");
const deleteAll = document.getElementById("btns__delete");
const pi = document.getElementById("btns__pi");
const equal = document.getElementById("equal");
const plusMinus = document.getElementById("btns__plusMinus");
const percentage = document.getElementById("btns__percentage");
const oneOverX = document.getElementById("btns__oneOverX");
const squared = document.getElementById("btns__squared");
const twoRootx = document.getElementById("btns__2rootx");
const CE = document.getElementById("btns__CE");
const decimals = document.getElementById("btns__decimal");

// Handle Number buttons
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", handleNumbers);
}

//create empty array to push each input clicked
visualBox.innerHTML = 0;
let containerNumbers = [];
let containerFunctions = [];
let visualBoxContainer = [];

function handleNumbers(number) {
    if (containerNumbers.length >= 14) {
        return false;
    }
    containerNumbers.push(number.target.innerHTML);
    let numberChild = document.createTextNode(
        containerNumbers[containerNumbers.length - 1]
    );
    let parseNumber = parseFloat(number.target.innerText);

    if (visualBox.childNodes.length > 13) {
        return false;
    }
    if (visualBox.innerHTML.charAt(0) === "0") {
        visualBox.innerHTML = visualBox.innerHTML.substring(1);
    }
    visualBox.appendChild(numberChild);
    visualBoxContainer.push(parseNumber);
    console.log(visualBoxContainer);
}

let visualBoxNums = 0;
let funcValueStr = [];
let equalCalc = [];

// handle Function Buttons
for (let j = 0; j < functions.length; j++) {
    functions[j].addEventListener("click", handleFunctions);
}

function handleFunctions(func) {
    if (visualBox.innerHTML.charAt(0) === "0") {
        return false;
    }

    if (equalCalc.length > 0) {
        calculations();
    }

    visualBoxNums = document.createTextNode(visualBox.innerText);
    let parseVisualBox = parseFloat(visualBox.innerText);
    funcValueStr.push(parseVisualBox);
    calcBox.appendChild(visualBoxNums);
    visualBox.innerText = 0;
    let funcValue = document.createTextNode(func.target.innerText);
    calcBox.appendChild(funcValue);

    equalCalc.push(func.target.innerHTML);
}

//handle Equal
let equalCalculate = equal.addEventListener("click", calculations);

//handle calculations
function calculations() {
    console.log(equalCalc);
    let calculateFunc = 0;
    const visualValue = parseFloat(visualBox.innerText);
    const calcBoxValue = parseFloat(calcBox.innerText);

    switch (equalCalc[0].toString()) {
        case "+":
            calculateFunc = calcBoxValue + visualValue;
            break;
        case "-":
            calculateFunc = calcBoxValue - visualValue;
            break;
        case "×":
            calculateFunc = calcBoxValue * visualValue;
            break;
        case "÷":
            calculateFunc = calcBoxValue / visualValue;
            break;
        default:
            return;
    }

    visualBox.innerText = calculateFunc.toString().substring(0, 14);
    calcBox.innerText = "";
    equalCalc = [];
    visualBoxContainer = [];
    containerFunctions = [];
    containerNumbers = [];
    equalCalc = [];
    funcValueStr = [];
}

//handle delete
deleteAll.addEventListener("click", () => {
    visualBox.innerHTML = 0;
    calcBox.innerHTML = "";
    visualBoxContainer = [];
    containerFunctions = [];
    containerNumbers = [];
    equalCalc = [];
    funcValueStr = [];
});

//handle pi
pi.addEventListener("click", () => {
    visualBox.innerHTML = 3.1415926535897;

    if (visualBox.innerHTML === "") {
        visualBox.innerHTML = 0;
    }
});

//handle plusMinus btn
plusMinus.addEventListener("click", () => {
    if (visualBox.innerHTML > 0) {
        visualBox.innerHTML = "-" + visualBox.innerHTML;
    } else {
        visualBox.innerHTML = visualBox.innerHTML.substring(1);
    }
});

//handle % btn
percentage.addEventListener("click", () => {
    if (calcBox.innerHTML === "") {
        return false;
    }
    let setPercent = document.createTextNode(
        (visualBox.innerHTML = visualBox.innerHTML / 100)
    );
    calcBox.appendChild(setPercent);
});

//handle 1/x
oneOverX.addEventListener("click", () => {
    if (visualBox.innerHTML === "0") {
        return false;
    }

    calcBox.innerHTML = `1 / (${visualBox.innerHTML})`;

    visualBox.innerHTML = 1 / visualBox.innerHTML;
    visualBox.innerHTML = visualBox.innerHTML.substring(0, 14);
});

//handle square btn
squared.addEventListener("click", () => {
    if (visualBox.innerHTML === "0") {
        return false;
    }

    calcBox.innerHTML = `sqr(${visualBox.innerHTML})`;

    visualBox.innerHTML = Math.pow(visualBox.innerHTML, 2);
    visualBox.innerHTML = visualBox.innerHTML.substring(0, 14);
});

//handle square root
twoRootx.addEventListener("click", () => {
    if (visualBox.innerHTML === "0") {
        return false;
    }

    calcBox.innerHTML = ``;

    visualBox.innerHTML = Math.sqrt(visualBox.innerHTML);
    visualBox.innerHTML = visualBox.innerHTML.substring(0, 14);
});

//handle CE btn
CE.addEventListener("click", () => {
    visualBox.innerHTML = visualBox.innerHTML.slice(0, -1);
    visualBoxContainer.splice(-1);

    if (visualBox.innerHTML === "") {
        visualBox.innerHTML = 0;
    }
});

//handle decimal
const getDecimal = (e) => {
    if (Object.values(visualBox.innerText).includes(".")) {
        return false;
    }
    let decimalChild = document.createTextNode(e.target.innerText);
    visualBox.appendChild(decimalChild);
};

decimals.addEventListener("click", getDecimal);
