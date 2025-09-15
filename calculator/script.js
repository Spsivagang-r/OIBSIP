let expressionDisplay = document.getElementById("expression");
let resultDisplay = document.getElementById("result");
let lastAnswer = 0;

function appendValue(value) {
  expressionDisplay.textContent += value;
}

function clearDisplay() {
  expressionDisplay.textContent = "";
  resultDisplay.textContent = "0";
}

function delChar() {
  expressionDisplay.textContent = expressionDisplay.textContent.slice(0, -1);
}

function calculate() {
  try {
    let exp = expressionDisplay.textContent;
    let result = eval(exp);
    resultDisplay.textContent = result;
    lastAnswer = result;
  } catch {
    resultDisplay.textContent = "Error";
  }
}

function useAns() {
  expressionDisplay.textContent += lastAnswer;
}