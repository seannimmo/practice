
let result = 0;

const updateResult = () => {
    const resultElm = document.querySelector('#result');
}

const clearInput = () => {
    let inputElm=document.querySelector('#number');

}

const add = () => {
    
    const inputElm = document.querySelector('#number');
    const resultElm = document.querySelector('#result');

    const number = parseInt(inputElm.value);

    result += number;
    updateResult();
    clearInput();
    resultElm.textContent = result;
    console.log(number);

};

const OnClear = () => {
    const resultElm = document.querySelector('#result');
    let inputElm=document.querySelector('#number');
    inputElm.value = "";
    result = 0;
    resultElm.textContent = 0;
}

const onEqual = () => {

}