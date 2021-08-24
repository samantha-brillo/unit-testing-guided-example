function sum(a, b) {
  return;
}

function subtract(a, b) {
  if (!a && !b) {
    return 0;
  }
  if (!a) {
    return b;
  }
  if (!b) {
    return a;
  } else {
    return a - b;
  }
}

function divide(a, b) {
  if (b == 0) {
    throw new Error('no puedes dividir entre 0');
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
