let countNum = document.getElementById('counter-value');
let count = 0;

function handle() {
    countNum.textContent = count;
}
function counter(){

    let savedCount = localStorage.getItem("counter");
if(savedCount === null){
    count = 0;
}else{
    count = Number(savedCount);
}
updateDisplay();
}
function updateDisplay() {
  handle();
  function color(){  
        if (count > 0) {
        countNum.style.color = '#29cc23a4';
    }
    else if (count < 0) {
        countNum.style.color = '#c70909';
    }
    else {        
        countNum.style.color = '#000000';
        
    }}
    localStorage.setItem("counter", count);
    color(); 
}
function increase() {
    count++;
}
function decrease() {
    if (count > 0) {
        count--;
    }
}
function add5() {
    count += 5;
}
function reset(){
    count=0;
}

counter();


document.getElementById('increase-button').addEventListener('click', () => { increase(); updateDisplay(); })
document.getElementById('decrease-button').addEventListener('click', () => { decrease();  updateDisplay();})
document.getElementById('increase-five-button').addEventListener('click', () => { add5();  updateDisplay();})
document.getElementById('reset-button').addEventListener('click', () => { reset();  updateDisplay();})