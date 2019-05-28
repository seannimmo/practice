class ProgressBar {
  constructor(progress, max) {
    this.progress = progress;
    this.max = max;
  }
}

let progress = 4;
let max = 100;

const onPlus = () => {
  if(progress < max){
    progress++
    update();
  }
}



const onMinus = () => {
  if(progress > 0){
    progress--
    update();
  }
}

const update = () => {
  const maxValue = document.querySelector('#maximum');
  
  counter.textContent = progress;
  maxValue.textContent = max;
  knob.style.width = progress * (100/max) + "%";
}


document.addEventListener('DOMContentLoaded', () => {
  const knob = document.querySelector('.knob');
  const counter = document.querySelector('#counter');

  update();

  const minus = document.querySelector('#minus');
  minus.addEventListener('click', onMinus);

  const plus = document.querySelector('#plus');
  plus.addEventListener('click', onPlus);
});