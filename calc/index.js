const calc = document.querySelector(".calc");
const numbersWrap = document.createElement("div");
const operatorsWrap = document.createElement("div");
const inputBody = document.createElement("input");
const calculation = document.createElement('p')
const body = document.querySelector('body')
const calcBody = document.createElement("div");
calcBody.appendChild(calculation)
calculation.style.position = 'absolute'
calculation.style.top = '-75px'
calculation.style.left = '10px'
calculation.style.fontSize = '12px'
calc.style.display = 'flex'
calc.style.flexDirection = 'column'
calc.style.alignItems = 'center'
calc.style.justifyContent = 'center'
calc.style.height = '100vh'
calcBody.style.position = 'relative'
calcBody.style.display = "flex";
calcBody.appendChild(inputBody);
calcBody.appendChild(numbersWrap);
calcBody.appendChild(operatorsWrap);
numbersWrap.style.width = "320px";
inputBody.style.width = "370px";
inputBody.style.height = "80px";
inputBody.style.marginLeft = '50px'
operatorsWrap.style.display = "flex";
operatorsWrap.style.flexDirection = "column";
calc.appendChild(inputBody);
calc.appendChild(calcBody);
const button = document.createElement("button");
operatorsWrap.style.position = 'absolute'
operatorsWrap.style.top = ''
operatorsWrap.style.left = '320px'
inputBody.style.fontSize = '28px'
const numbers = ['','','', '','','', 7, 8, 9, 4, 5, 6, 1, 2, 3, '...', 0, '.'];

for (let i = 0; i < numbers.length; i++) {
  const number = document.createElement("button");
  number.style.padding = "14px";
   number.innerText = `${numbers[i]}`;
  number.style.width = "33%";
  number.addEventListener("click", () => {
    inputBody.value += number.innerText;
  });
  numbersWrap.appendChild(number);
}

const operators = ["C","+", "-", "*", "/", "="];
for (let i = 0; i < operators.length; i++) {
  const operator = document.createElement("button");
  operator.style.padding = "14.25px";
  operator.innerText = operators[i];
  if (operator.innerText === "=") {
    operator.style.backgroundColor = 'lightblue'}
  operator.addEventListener("click", () => {
    if (operator.innerText === "=") {
        calculation.innerText = `${inputBody.value} = `
      inputBody.value = eval(inputBody.value);
    } else if(operator.innerHTML === 'C') {
        inputBody.value = ''
    } else {
      inputBody.value = ` ${inputBody.value}  ${operator.innerText}  `;
    }
    
    
});

operatorsWrap.appendChild(operator);
}


document.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    inputBody.value = eval(inputBody.value);
  }
})


