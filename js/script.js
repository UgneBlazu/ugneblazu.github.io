/**
 * Se detta som en grund att utgå ifrån.
 * Det är helt fritt att ändra och ta bort kod om ni
 * önskar lösa problemen med andra metoder.
 */

let lcd = null; // displayen

let memory = ""; // Lagrat/gamlat värdet från display
let arithmetic = null; // Vilken beräkning som skall göras +,-, x eller /

function init() {
    lcd = document.getElementById('lcd');
    let keyBoard = document.getElementById('keyBoard')
    keyBoard.onclick = buttonClick;
}

/**
 * Händelsehanterare för kalkylatorns tangentbord
 */
function buttonClick(e) {
    let btn = e.target.id; //id för den tangent som tryckte ner


    // kollar om siffertangent är nedtryckt
    if (btn.substring(0, 1) === 'b') {
        let digit = btn.substring(1, 2); // plockar ut siffran från id:et
        memory += digit;

    }else if (btn == 'sub'){
        memory += "-";
    }

    else if (btn == 'add'){
        memory += "+";

    } else if (btn == 'div'){
        memory += "/";
    }

    else if (btn == 'mul'){
        memory += "*";
    }

    else if(btn == 'comma'){
        addComma();
    }

    else if (btn == 'enter') {
        calculate();
    }

    else if (btn == 'clear') {
        memClear();
        clearLCD();
    } 
    addDigit();
}

/**
 *  Lägger till siffra på display.
 */
function addDigit(digit) {
    document.getElementById("lcd").value = memory;

}

/**
 * Lägger till decimaltecken
 */
function addComma() {
    memory += ".";
}

/**
 * Sparar operator.
 * +, -, *, /
 */
function setOperator(operator){

}

/**
 * Beräknar ovh visar resultatet på displayen.
 */
function calculate() {
    memory = eval(memory)
        document.getElementById("lcd").value = memory;
}

/** Rensar display */
function clearLCD() {
    lcd.value = '';
    isComma = false;
}

/** Rensar allt, reset */
function memClear(){
    memory = "";

    arithmetic = null;
    clearLCD();
}

window.onload = init;
