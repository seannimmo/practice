let result = 0;
let plus = false;
let operation= null;


const updateResult = () => {
  const resultElm = document.querySelector('.calc__result');
  resultElm.textContent = result;
}

const clearInput = () => {
  const inputElm = document.querySelector('.calc__input');
  inputElm.value = '0';
}

const onPlus = () => {
  const inputElm = document.querySelector('.calc__input');
  const number = parseInt(inputElm.value);
  
  result += number;
  updateResult();
  clearInput();
  plus = true;
};

const onClear = () => {
  result = 0;
  updateResult();
  clearInput();
};

const onEquals = () => {
  if(plus){
    onPlus();
    plus = false;
  }
  else{
    const inputElm = document.querySelector('.calc__input');
    const number = parseInt(inputElm.value);
    

    const resultElm = document.querySelector('.calc__result');
    resultElm.textContent = number;
    clearInput();

  }
  

}

document.addEventListener('DOMContentLoaded',() => {
  const btnClear = document.querySelector('#btn-clear');
  btnClear.addEventListener("click", onClear);

  const btnPlus = document.querySelector('#btn-plus');
  btnPlus.addEventListener("click", onPlus);

  const btnEquals = document.querySelector('#btn-equals');
  btnEquals.addEventListener("click", onEquals);
} );

