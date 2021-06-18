const numbers = document.getElementsByClassName('btns__numbers');
const functions = document.getElementsByClassName('btns__funcs');
const calcBox = document.getElementById('btns__calcBox');
const visualBox = document.getElementById('btns__visualBox');
const deleteAll = document.getElementById('btns__delete');
const backspace = document.getElementById('btns__backspace');
const equal = document.getElementById('equal');
const plusMinus = document.getElementById('btns__plusMinus');
const percentage = document.getElementById('btns__percentage');
const oneOverX = document.getElementById('btns__oneOverX');
const squared = document.getElementById('btns__squared');
const twoRootx = document.getElementById('btns__2rootx');
const CE = document.getElementById('btns__CE');



// Handle Number buttons
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", handleNumbers);
}

//create empty array to push each input clicked
let containerNumbers = [];
let containerFunctions = [];
visualBox.innerHTML = "0";


function handleNumbers(number) {
  containerNumbers.push(number.target.innerHTML);

  const strArr = containerNumbers.toString()
  console.log(strArr.split("."));

  let numberChild = document.createTextNode(containerNumbers[containerNumbers.length - 1]);


  //display each number on screen
  if (visualBox.childNodes.length > 14) {
    return false;
  };

  if (visualBox.innerHTML.charAt(0) === "0") {
    visualBox.innerHTML = visualBox.innerHTML.substring(1);
  }

  visualBox.appendChild(numberChild);

}


// handle Function Buttons
for (let j = 0; j < functions.length; j++) {
  functions[j].addEventListener("click", handleFunctions);
}

function handleFunctions(func) {
  if (visualBox.innerHTML.charAt(0) === "0") {
    return false;
  }
  let visualBoxNums = document.createTextNode(visualBox.innerText)
  calcBox.appendChild(visualBoxNums);
  visualBox.innerText = 0;
  let funcValue = document.createTextNode(func.target.innerText);
  calcBox.appendChild(funcValue);
  funcValueStr.push(func.target.innerHTML);
}

//place value of functions to reuse in calculations
let funcValueStr = [];


//handle calculations
function calculations() {
  let calculateFunc = 0;
  const visualValue = parseFloat(visualBox.innerText);
  const calcBoxValue = parseFloat(calcBox.innerText);

  switch (funcValueStr[0].toString()) {
    case '+':
      calculateFunc = calcBoxValue + visualValue;
      break;
    case '-':
      calculateFunc = calcBoxValue - visualValue
      break;
    case '×':
      calculateFunc = calcBoxValue * visualValue
      break;
    case '÷':
      calculateFunc = calcBoxValue / visualValue
      break;
    default:
      return;
  }

  visualBox.innerText = calculateFunc.toString().substring(0, 14);
  calcBox.innerText = '';
  funcValueStr = [];
}

//handle Equal
let equalCalculate = equal.addEventListener("click", calculations);


//handle delete
deleteAll.addEventListener("click", () => {
  visualBox.innerHTML = 0;
  calcBox.innerHTML = "";

})

//handle plusMinus btn
plusMinus.addEventListener("click", () => {
  if (visualBox.innerHTML > 0) {
    visualBox.innerHTML = "-" + visualBox.innerHTML;
  } else {
    visualBox.innerHTML = visualBox.innerHTML.substring(1);
  }
})


//handle % btn
percentage.addEventListener("click", () => {
  if (calcBox.innerHTML === "") {
    return false;
  }
  let setPercent = document.createTextNode(visualBox.innerHTML = visualBox.innerHTML / 100);
  calcBox.appendChild(setPercent);

})


//handle 1/x 
oneOverX.addEventListener("click", () => {

  if (visualBox.innerHTML === "0") {
    return false;
  }

  calcBox.innerHTML = `1 / (${visualBox.innerHTML})`

  visualBox.innerHTML = 1 / visualBox.innerHTML;
  visualBox.innerHTML = visualBox.innerHTML.substring(0, 14)

})


//handle backspace
backspace.addEventListener("click", () => {
  if (visualBox.innerHTML === "0") {
    return false;
  }

  visualBox.innerHTML = visualBox.innerHTML.slice(0, -1)

  if (visualBox.innerHTML === "") {
    visualBox.innerHTML = 0;
  }

})


//handle square btn 
squared.addEventListener("click", () => {
  if (visualBox.innerHTML === "0") {
    return false;
  }

  calcBox.innerHTML = `sqr(${visualBox.innerHTML})`

  visualBox.innerHTML = Math.pow(visualBox.innerHTML, 2)
  visualBox.innerHTML = visualBox.innerHTML.substring(0, 14)

})

//handle square root 
twoRootx.addEventListener("click", () => {
  if (visualBox.innerHTML === "0") {
    return false;
  }

  calcBox.innerHTML = ``;

  visualBox.innerHTML = Math.sqrt(visualBox.innerHTML)
  visualBox.innerHTML = visualBox.innerHTML.substring(0, 14)

})

//handle CE btn
CE.addEventListener('click', () => {
  if (visualBox.innerHTML === "0") {
    return false;
  }

  visualBox.innerHTML = "0";

})

/*still to do
 - decimal pts 
*/