let result = 0;
let operation= null;


const updateResult = () => {
  const resultElm = document.querySelector('.calc__result');
  resultElm.textContent = result;
}

const clearInput = () => {
  const inputElm = document.querySelector('.calc__input');
  inputElm.value = '0';
}

const addNum = toAdd => {
  const inputElm = document.querySelector('.calc__input');
  const number = inputElm.value;
  inputElm.value = number + toAdd;

  
}
const onPlus = () => {
  onEquals();
  operation = '+';
  
};

const onMinus = () => {
  onEquals();
  operation = '-';
  
};

const onMult = () => {
  onEquals();
  operation = 'x';
  
};

const onDivide = () => {
  onEquals();
  operation = '/';
  
};

const onClear = () => {
  result = 0;
  updateResult();
  clearInput();
};

const onEquals = () => {
  const inputElm = document.querySelector('.calc__input');
  const number = parseFloat(inputElm.value);
  console.log(number);
  
  switch (operation) {
    case '+':
      result +=number;
      break;
    case '-':
      result -= number;
      break;
    case 'x':
      result = result * number;
      break;
    case '/':
      result = result / number;
      break;
    default:
      result = number;


  }
  operation = null;
  updateResult();
  clearInput();
}



document.addEventListener('DOMContentLoaded',() => {
  const btnClear = document.querySelector('#btn-clear');
  btnClear.addEventListener("click", onClear);

  const btnPlus = document.querySelector('#btn-plus');
  btnPlus.addEventListener("click", onPlus);

  const btnMinus = document.querySelector('#btn-minus');
  btnMinus.addEventListener("click", onMinus);

  const btnMult = document.querySelector('#btn-mult');
  btnMult.addEventListener("click", onMult);

  const btnDivide = document.querySelector('#btn-divide');
  btnDivide.addEventListener("click", onDivide);

  const btnEquals = document.querySelector('#btn-equals');
  btnEquals.addEventListener("click", onEquals);

  const btn7 = document.querySelector('#btn-7');
  btn7.addEventListener("click", function() {addNum('7');});

  const btn8 = document.querySelector('#btn-8');
  btn8.addEventListener("click", function() {addNum('8');});

  const btn9 = document.querySelector('#btn-9');
  btn9.addEventListener("click", function() {addNum('9');});

  const btn4 = document.querySelector('#btn-4');
  btn4.addEventListener("click", function() {addNum('4');});

  const btn5 = document.querySelector('#btn-5');
  btn5.addEventListener("click", function() {addNum('5');});

  const btn6 = document.querySelector('#btn-6');
  btn6.addEventListener("click", function() {addNum('6');});

  const btn1 = document.querySelector('#btn-1');
  btn1.addEventListener("click", function() {addNum('1');});

  const btn2 = document.querySelector('#btn-2');
  btn2.addEventListener("click", function() {addNum('2');});

  const btn3 = document.querySelector('#btn-3');
  btn3.addEventListener("click", function() {addNum('3');});

  const btn0 = document.querySelector('#btn-0');
  btn0.addEventListener("click", function() {addNum('0');});

  const btnComma = document.querySelector('#btn-comma');
  btnComma.addEventListener("click", function() {addNum('.');});
} );

