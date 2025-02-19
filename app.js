const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
console.log(buttons);

let calculation = [];
let accumulativeCalc;

function calculate(a) {
  const value = a.textContent;
  if (value == "CLEAR") {
    calculation = [];
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    screenDisplay.textContent = eval(accumulativeCalc);
  } else {
    calculation.push(value);
    accumulativeCalc = calculation.join("");
    screenDisplay.textContent = accumulativeCalc;
  }
}

buttons.forEach((a) => a.addEventListener("click", () => calculate(a)));
