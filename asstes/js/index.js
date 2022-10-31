const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll ('.sign');
const negative = document.querySelector ('.negative');
const clear = document.querySelector ('.clear');
const percent = document.querySelector ('.percent');
const equals = document.querySelector ('.equals');


let fristValue= "";
let isfristValue= false;
let secondValue = "";
let isSecondValue= false;
let sign = "";
let resultValue =0;

for(let i = 0 ; i < numbers.length; i++){
    numbers[i].addEventListener('click',(e) => {
        let atr = e.target.getAttribute('value');
        if(isfristValue === false ) {
            getFristvalue(atr)
        }
        if(isSecondValue == false) {
            getSecondtvalue(atr)
        }
    })
}
function getFristvalue (el) {
    result.innerHTML = "";
    fristValue += el;
    result.innerHTML = fristValue;
    fristValue = +fristValue;
}

function getSecondtvalue(el) {
if(fristValue != "" && sign != "") {
    secondValue += el;
    result.innerHTML = secondValue;
    secondValue = +secondValue;

}
}

function getsign() {
    for(let i = 0 ; i < signs.length; i++){
        signs[i].addEventListener('click',(e) => {
            sign = e.target.getAttribute('value');
            isfristValue =true;
    
})
}
}
getsign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if(sign === "+") {
        resultValue = fristValue + secondValue;

    }  else if(sign === "-") {
        resultValue = fristValue - secondValue;

    }
  else if(sign === "x") {
        resultValue = fristValue * secondValue;

    } 
    else if(sign === "/") {
        resultValue = fristValue / secondValue;
        
    }
    result.innerHTML = resultValue;
    fristValue = resultValue;
    secondValue = "";
    checkReusilengh();
    
})

function checkReusilengh() {
    resultValue  = JSON.stringify(resultValue);
    if (resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click',() => {
    result.innerHTML = "";
    if(fristValue != ""){
        resultValue = -fristValue  ;
        fristValue = resultValue ;

    } 

    if (fristValue != "" && secondValue != "" && sign  != "" ) {
        resultValue = -resultValue;
    }
    result.innerHTML = resultValue;
})

percent.addEventListener('click',() => {
    result.innerHTML = "";
    if(fristValue != ""){
        resultValue = fristValue / 100  ;
        fristValue = resultValue ;

    } 

    if (fristValue != "" && secondValue != "" && sign  != "" ) {
        resultValue = resultValue / 100;
    }
    result.innerHTML = resultValue;

})

clear.addEventListener('click',() => {
    result.innerHTML = 0;
    fristValue = "";
    isfristValue= false;
    secondValue = "";
    isSecondValue= false;
    sign = "";
    resultValue = 0;
})