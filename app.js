let a = '';
let b = '';
let sign = '';
let finish = false;

const display = document.getElementById('display');
const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['+', '-', '*', '/'];

function allClear() {
    let a = '';
    let b = '';
    let sign = '';
    let finish = false;
    display.textContent = 0;
}

document.getElementById('ac').onclick = allClear;

document.querySelector('.buttons').onclick = (event) => {
    display.textContent = '';
    //Key clicked
    const key = event.target.textContent;
    
    //0-9 or .
    if (digit.includes(key)) {
        if (a === '' && sign === '') {
        a += key;
        display.textContent = a;
        } else if (a!== '' && b!== '' && finish) {
            b = key;
            finish = false;
            display.textContent = a;
        } else {
            b += key;
            display.textContent = b;
        }
        return;
    }

    //Actions + - / *
    if (action.includes(key)) {
        sign += key;
        display.textContent = sign;
    }
}

