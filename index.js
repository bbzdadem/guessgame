window.onload = function() {
    document.getElementById("checkbtn").addEventListener("click", playGame);
    document.getElementById("restartbtn").addEventListener("click", initGame);
    // showWon();
}

let guesses = [];
let correctNumb = getrandomNumber();
console.log(correctNumb)

function playGame() {
    let numberg = document.getElementById("numberinput").value;
    dispResult(numberg)
    saveHistory(numberg)
    showHistory()
}

function initGame() {
    correctNumb = getrandomNumber();
    document.getElementById("result").innerHTML = "";
    guesses = [];
    showHistory();

}

function getrandomNumber() {
    let randnum = Math.random();
    let wholenum = Math.floor(randnum*100)+1;
    return wholenum;
}

function dispResult(numberg) {
    if(numberg>correctNumb){
        showHigh();
    }else if (numberg<correctNumb) {
        showLow();
    }else {
        showWon();
    }
}

function showWon(){
    const text = "You guessed correct"
    
    let dialog = getDialog('won', text );
    document.getElementById("result").innerHTML = dialog;
}

function showHigh(){
    const text = "You guessed high"
    
    let dialog = getDialog('warning', text );
    document.getElementById("result").innerHTML = dialog;
}

function showLow(){
    const text = "You guessed low"
    
    let dialog = getDialog('warning', text );
    document.getElementById("result").innerHTML = dialog;
}

function getDialog(dialogType, text){
    let dialog; 
    switch(dialogType) {
        case "warning":
            dialog = "<div class='alert' >"
        break;
        case "won" :
            dialog = "<div class='won' >"
    }

    dialog+=text;
    dialog+="</div>"
    return dialog;

}

function saveHistory(guess) {
    guesses.push(guess);
}

function showHistory() {
    let index = guesses.length-1;
    let list = "<ul class='list'>";
    
    while(index>=0){
        list += "<li class='listitem'>" + "You guessed " + guesses[index] + "</li>";
        index--;
    }
    
    list += '</ul>';
    document.getElementById("guesshistory").innerHTML = list;
}
