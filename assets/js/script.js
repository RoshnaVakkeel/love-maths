// Wait or the DOM to be loaded before running the game
// Get the buttons elements and add event liseners to them

document.addEventListener("DOMContentLoaded",function() {
let buttons = document.getElementsByTagName("button");

for (let button of buttons){
    button.addEventListener("click", function (){
        if (this.getAttribute("data-type") === "submit"){
            checkAnswer();
        } else {
            let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
})

/**
 * Th main game loop, called hen script is first loaded 
 * and after user's answer is processed.
 */
function runGame(gameType) {
    // creates two random numbers between 1 and 25
   let num1 = Math.floor(Math.random()*25) + 1;
   let num2 = Math.floor(Math.random()*25) + 1;

   if (gameType === "addition"){
    displayAdditionQuestion(num1, num2);
   } else {
    alert(`Unknown game type: ${gameType}.`)
    throw(`Unknown game type: ${gameType}. Aborting!`);
   }
}


/** 
 * Checks if the userAnswer is equal to the calculateCorrectAnswer
*/
 
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert ("Hey! You got it right! :D");
    } else {
        alert(`Awww.. you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`)
    }

    runGame(calculatedAnswer[1])
}

/**
 * Gets operanads and operator from DOM
 * and returns correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementsById('operand1').innerText);
    let operand2 = parseInt(document.getElementsById('operand2').innerText);
    let operator = parseInt(document.getElementsById('operator').innerText);

    if (operator=== "+"){
        return [operand1 + operand2, "addition"];
    } else {
        alert (`Unimplemented operator $(operator)`);
        throw (`Unimplemented operator $(operator). Aborting!`);
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById ("operand1").textContent = operand1;
    document.getElementById ("operand2").textContent = operand2;
    document.getElementById ("operator").textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}