function add(int1, int2) {
  return int1 + int2;
}

function subtract(int1, int2) {
  return int1 - int2;
}

function multiply(int1, int2) {
  return int1 * int2;
}

function divide(int1, int2) {
  return int1 / int2;
}

function operate(int1, operator, int2) {
  switch (operator) {
    case "+":
      add(int1, int2);
    case "-":
      subtract(int1, int2);
    case "*":
      multiply(int1, int2);
    case "/":
      divide(int1, int2);
  }
}