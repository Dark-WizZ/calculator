function add(a, b){return a+b}
function sub(a, b){return a-b}
function multiply(a, b){return a*b}
function divide(a, b){return a/b}

function operate(op, a, b){
  switch(op){
    case 'add' : return add(a, b);
    case 'sub' : return sub(a, b);
    case 'multiply' : return multiply(a, b);
    case 'divide' : return divide(a, b);
  }
}

function numClick(){
  display.focus();
  display.value += this.classList[0];
}

let input = '';
const numBtns = document.querySelectorAll('.num');
const display = document.querySelector('input');

numBtns.forEach(btn =>{
  btn.addEventListener('click', numClick)
})