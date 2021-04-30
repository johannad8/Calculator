const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator__display')
const keys = calculator.querySelector('.calculator__keys');
console.log(display);
console.log(keys);

calculatorValue = 0;

function addSum(sum) {
  calculatorValue = calculatorValue + sum;
}

keys.addEventListener('click', e => {
  if(!e.target.matches('button')) return
  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const displayedNum = display.textContent;


  //If no action = 0 in the display-box and if any action = any numbers in the display-box
  if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent;
    } else {
      display.textContent = displayedNum + keyContent;
    }
  }



  // Key pads
  if (
    action === 'add' ||
    action === 'subract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    key.classList.add('is-pressed');
    console.log('operator key!')
  }

  if (action === 'add') {
    addSum(keyContent);
  }

  if (!action) {
    console.log('number key!')
  }

  if (
    action === 'decimal'
  ) {
    display.textContent = displayedNum + '.';
    console.log('decimal key!')
  }

  if (
    action === 'clear'
  ) {
    console.log('clear key!')
  }

  if (
    action === 'calculate'
  ) {
    console.log('equal key!')
  }




  //Callback for operators here?
  //onClickOperators();
})
