let a = '';
let b = '';
let sign = '';
let finish = false; 

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const action = ['+', '-', '*', '/'];

const display = document.querySelector('.display');

function allClear() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    display.textContent = 0;
}

document.querySelector('.ac').onclick = allClear;

document.querySelector('.buttons').onclick = (event) => {
    //Not a button clicked
    if(!event.target.classList.contains('button')) return;
    //AC clicked
    if(event.target.classList.contains('ac')) return;
    display.textContent = '';
    //Key clicked
    const key = event.target.textContent;
    
    //0-9 or .
    if (digit.includes(key)) {
        if (a === '' && sign === '') {
        a += key;
        display.textContent = a;
        } else if (a!== '' && b==='' && sign === '') {
            a += key;
            display.textContent = a;        
        } else if (a!== '' && b!== '' && finish) {
            b = key;
            finish = false;
            display.textContent = b;
        } else {
            b += key;
            display.textContent = b;
        }
        console.log(a, b, sign);
        return;
    }

    //Actions + - / *
    if (action.includes(key)) {
        sign = key;
        display.textContent = sign;
        console.log(a, b, sign);
    }

    //Action =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '*':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    display.textContent = 'You can`t do this!';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        display.textContent = a;
        console.log(a, b, sign);
    }
}

