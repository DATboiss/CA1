var buttons = document.getElementById("buttons");
var display = document.getElementById("display");
var calculate = document.getElementById("calculate");
buttons.addEventListener("click", buttonEventHandler);
calculate.addEventListener("click", calculateEventHandler);

function buttonEventHandler(e) {
    display.innerText += e.target.innerText;
}

function calculateEventHandler(e) {
    var result = 0;
    e.stopPropagation();
    if (display.innerText.indexOf("*") !== -1) {

        var number = display.innerText.split("*");
        var curResult = number[0];
        for (var i = 0; i < number.length - 1; i++) {
            curResult *= Number(number[i + 1]);
        }
        display.innerText = curResult;
    }
    if (display.innerText.indexOf("/") !== -1) {
        var number = display.innerText.split("/");
        var divResult = number[0];
        for (var i = 0; i < number.length - 1; i++) {
            divResult /= Number(number[i + 1]);
        }
        display.innerText = divResult;

    }
    if (display.innerText.indexOf("-") !== -1) {
        var number = display.innerText.split("-");
        var subResult = number[0];
        for (var i = 0; i < number.length - 1; i++) {
            subResult -= Number(number[i + 1]);
        }
        display.innerText = subResult;
    }
    if (display.innerText.indexOf("+") !== -1) {
        var number = display.innerText.split("+");
        var addResult = number[0];
        for (var i = 0; i < number.length - 1; i++) {
            addResult += Number(number[i + 1]);
        }
        display.innerText = addResult;
    }
    else {
        return;
    }
}


